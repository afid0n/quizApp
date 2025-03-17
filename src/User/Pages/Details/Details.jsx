import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import controller from "../../../Services/API/request";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      const result = await controller.getOne("questions", id);
      if (result.error) {
        console.error("Error fetching question:", result.error);
      } else {
        setQuestion(result.data);
      }
      setLoading(false);
    };

    fetchQuestion();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <button
        onClick={() => navigate(-1)}
        className="absolute cursor-pointer top-4 left-4  border px-4 py-2 rounded-lg"
      >
        <i class="fa-solid fa-arrow-left"></i>{" "}Back to Questions
      </button>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg ">
        <div className="flex gap-2">
          <span>{question.difficulty}</span>
          <span>{question.category}</span>
        </div>
        <h2 className="text-3xl mb-4 mt-2 font-bold">{question.title}</h2>
        <div>
          <p className="font-bold text-xl">Answer:</p>
          <span className="block mb-3">{question.answers}</span>
        </div>
        <div>
          <p className="font-bold text-xl">Additional Information:</p>
          <p>This question is categorized as <span className="font-bold">{question.category}</span> with a difficulty level of <span className="font-bold">{question.difficulty}</span>. It's a common question asked in developer interviews and technical assessments.</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
