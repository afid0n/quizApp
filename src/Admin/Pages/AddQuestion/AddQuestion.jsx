import React, { useState } from 'react';

const AddQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [category, setCategory] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [answer, setAnswer] = useState('');

  const handleTitleChange = (e) => setQuestionTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleLevelChange = (e) => setDifficultyLevel(e.target.value);
  const handleAnswerChange = (e) => setAnswer(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = { questionTitle, category, difficultyLevel, answer };

    console.log('New Question:', newQuestion);

    setQuestionTitle('');
    setCategory('');
    setDifficultyLevel('');
    setAnswer('');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Add New Question</h2>
      <p className="mb-6">Create a new question for the DevQuiz platform.</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Question Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter the question title"
            value={questionTitle}
            onChange={handleTitleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
          >
            <option value="">Select a category</option>
            <option value="HTML">HTML</option>
            <option value="JS">JS</option>
            <option value="REACT">REACT</option>
            <option value="CSS">CSS</option>
            <option value="GIT">GIT</option>
            <option value="SCSS">SCSS</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="level" className="block text-sm font-medium text-gray-700">
            Difficulty Level
          </label>
          <select
            id="level"
            value={difficultyLevel}
            onChange={handleLevelChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
          >
            <option value="">Select a level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
            Answer
          </label>
          <textarea
            id="answer"
            placeholder="Enter the answer to the question"
            value={answer}
            onChange={handleAnswerChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            rows="4"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="w-1/2 p-3 bg-gray-300 text-white rounded-lg"
            onClick={() => {
              setQuestionTitle('');
              setCategory('');
              setDifficultyLevel('');
              setAnswer('');
            }}
          >
            Cancel
          </button>
          <button type="submit" className="w-1/2 p-3 bg-black text-white rounded-lg">
            Save Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;
