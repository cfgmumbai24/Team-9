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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Questions</h1>
      <ul className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        {questions.map((question) => (
          <li key={question._id} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {question.question}
            </h2>
            <ul>
              {question.options.map((option, index) => (
                <li key={index} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`question-${question._id}`}
                      value={option}
                      onChange={() => handleOptionChange(question._id, option)}
                      checked={answers[question._id] === option}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-600">{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Answers"}
      </button>
    </div>
  );
};

export default QuestionsList;
