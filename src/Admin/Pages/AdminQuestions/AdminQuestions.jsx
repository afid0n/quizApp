import React, { useState, useEffect } from 'react';
import controller from '../../../Services/API/request';
import { NavLink } from 'react-router-dom';
const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');

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

  const filteredQuestions = questions
    .filter(
      (question) =>
        question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (question) =>
        selectedCategory === 'All Categories' || question.category === selectedCategory
    )
    .filter(
      (question) =>
        selectedLevel === 'All Levels' || question.difficulty === selectedLevel
    );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching questions: {error.message}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Questions</h2>
      <div className="flex w-full items-center gap-2">
        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="Search questions..."
            className="p-3 w-full border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="mb-4 w-1/2">
          <select
            className="p-3 w-full border border-gray-300 rounded-lg"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option>All Categories</option>
            <option>HTML</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>CSS</option>
            <option>Git</option>
            <option>SCSS</option>
          </select>
        </div>

        <div className="mb-4 w-1/2">
          <select
            className="p-3 w-full border border-gray-300 rounded-lg"
            value={selectedLevel}
            onChange={handleLevelChange}
          >
            <option>All Levels</option>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto shadow-md border-b border-gray-200 rounded-lg">
        <table className="min-w-full bg-white table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">ID</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Title</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Category</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Level</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuestions.map((question) => (
              <tr key={question.id} className="border-t border-gray-200">
                <td className="py-3 px-4 text-sm text-gray-700">{question.id}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{question.title}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{question.category}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{question.difficulty}</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <div className="flex gap-10">
                    <button>
                      <NavLink><i className="fa-solid fa-pen-to-square"></i></NavLink>
                    </button>
                    <button>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Questions;
