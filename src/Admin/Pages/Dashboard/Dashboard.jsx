import React, { useEffect, useState } from 'react';
import controller from '../../../Services/API/request';

const Dashboard = () => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [easyQuestions, setEasyQuestions] = useState(0);
  const [hardQuestions, setHardQuestions] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const questionResult = await controller.getAll('questions');
      if (questionResult.data) {
        setTotalQuestions(questionResult.data.length);
        
        const easy = questionResult.data.filter(q => q.difficulty === 'easy').length;
        const hard = questionResult.data.filter(q => q.difficulty === 'hard').length;
        
        setEasyQuestions(easy);
        setHardQuestions(hard);

        const categories = [
          ...new Set(questionResult.data.map((q) => q.category)),
        ];
        setTotalCategories(categories.length);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">DevQuiz Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Total Questions</h3>
          <div className="text-4xl font-bold">{totalQuestions}</div>
          <p className="text-gray-600 mt-2">Questions in the database</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <div className="text-4xl font-bold">{totalCategories}</div>
          <p className="text-gray-600 mt-2">Different question categories</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Easy Questions</h3>
          <div className="text-4xl font-bold">{easyQuestions}</div>
          <p className="text-gray-600 mt-2">Beginner-friendly questions</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Hard Questions</h3>
          <div className="text-4xl font-bold">{hardQuestions}</div>
          <p className="text-gray-600 mt-2">Advanced difficulty questions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Add a new question</li>
            <li>View and edit existing questions</li>
            <li>Filter questions by category or difficulty</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Tips</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use clear, concise language for questions</li>
            <li>Balance difficulty levels for a better user experience</li>
            <li>Regularly update content to keep it relevant</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
