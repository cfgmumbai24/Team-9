import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const backendURI =
    import.meta.env.VITE_BACKEND_URI || "http://localhost:3000";

  const userCtx = useContext(UserContext);
  const { userId } = userCtx;

  useEffect(() => {
    fetch(`${backendURI}/api/questions`)
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleOptionChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    const answerPayload = Object.entries(answers).map(
      ([questionId, answer]) => ({
        userId,
        questionId,
        answer,
      })
    );

    fetch(`${backendURI}/api/questions/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answerPayload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Answers submitted:", data);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Error submitting answers:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <h2>{question.question}</h2>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${question._id}`}
                      value={option}
                      onChange={() => handleOptionChange(question._id, option)}
                      checked={answers[question._id] === option}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={isSubmitting}>
        Submit Answers
      </button>
    </div>
  );
};

export default QuestionsList;
