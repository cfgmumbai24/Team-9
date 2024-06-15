import { useEffect, useState } from "react";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  const backendURI =
    import.meta.env.VITE_BACKEND_URI || "http://localhost:3000";
  const userId = import.meta.env.VITE_UID;

  useEffect(() => {
    fetch(`${backendURI}/api/questions`)
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleSubmit = (questionId, answer) => {
    fetch(`${backendURI}/api/questions/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, questionId, answer }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Answer submitted:", data))
      .catch((error) => console.error("Error submitting answer:", error));
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
                  <button onClick={() => handleSubmit(question._id, option)}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsList;
