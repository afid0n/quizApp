import React, { useState } from 'react';
import controller from '../../../Services/API/request';
import Swal from 'sweetalert2';
const AddQuestion = () => {
  const [title, setQuestionTitle] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficultyLevel] = useState('');
  const [answers, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (e) => setQuestionTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleLevelChange = (e) => setDifficultyLevel(e.target.value);
  const handleAnswerChange = (e) => setAnswer(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuestion = { title, category, difficulty, answers };

    setLoading(true);

    const result = await controller.postOne('questions', newQuestion);
    
    if (result.data) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Question added successfully",
        showConfirmButton: false,
        timer: 1500
      });    } 
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });    }

    setLoading(false);

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
            value={title}
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
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="CSS">CSS</option>
            <option value="Git">Git</option>
            <option value="SCSS">SCSS</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="level" className="block text-sm font-medium text-gray-700">
            Difficulty Level
          </label>
          <select
            id="level"
            value={difficulty}
            onChange={handleLevelChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
          >
            <option value="">Select a level</option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
            Answer
          </label>
          <textarea
            id="answer"
            placeholder="Enter the answer to the question"
            value={answers}
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
          <button type="submit" className="w-1/2 p-3 bg-black text-white rounded-lg" disabled={loading}>
            {loading ? 'Saving...' : 'Save Question'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;
