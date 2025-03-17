import React, { useState, useEffect } from 'react';
import controller from '../../../Services/API/request';
import { Link } from 'react-router-dom';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [shownAnswers, setShownAnswers] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      const result = await controller.getAll('questions');
      if (result.error) {
        setError(result.error);
      } else {
        setQuestions(result.data);
      }
      setLoading(false);
    };

    fetchQuestions();
  }, []); 

  const handleShowAnswer = (id) => {
    setShownAnswers((prev) => ({
      ...prev,
      [id]: { isVisible: true,isDisabled:true, buttonText: 'Show Answer' },
    }));

    setTimeout(() => {
      setShownAnswers((prev) => ({
        ...prev,
        [id]: { isVisible: false, isDisabled:false, buttonText: 'Show Answer' },
      }));
    }, 5000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }
  if (error) {
    return <div>Error fetching questions: {error.message}</div>;
  }

  return (
    <>
      <h2 className="text-4xl font-bold mt-3 mb-6 ml-25">Developer Questions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-white p-7 rounded-lg shadow-lg hover:shadow-xl "
          >
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">{question.title}</h1>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <h4 className="font-medium">{question.difficulty}</h4>
              <h4 className="font-medium">{question.category}</h4>
            </div>
            <div className="mt-4 text-gray-700">
              {shownAnswers[question.id]?.isVisible ? (
                <p>{question.answers}</p>
              ) : (
                <p>Answer is hidden</p>
              )}
            </div>
            <div className="mt-6 flex justify-between gap-4">
            <button
                onClick={() => handleShowAnswer(question.id)}
                className={`py-2 px-4 rounded-lg transition ${
                  shownAnswers[question.id]?.isDisabled
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-700'
                }`}
                disabled={shownAnswers[question.id]?.isDisabled}
              >
                {shownAnswers[question.id]?.buttonText || 'Show Answer'}
              </button>
              <button className="border rounded py-2 px-4 rounded-lg">
                <Link to={`/questions/${question.id}`}>View Details</Link>
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Questions;
