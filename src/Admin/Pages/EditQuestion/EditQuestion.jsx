import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import controller from '../../../Services/API/request';
import Swal from 'sweetalert2';

const EditQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setQuestionTitle] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficultyLevel] = useState('');
  const [answers, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      const result = await controller.getOne('questions', id);
      if (result.data) {
        setQuestionTitle(result.data.title);
        setCategory(result.data.category);
        setDifficultyLevel(result.data.difficulty);
        setAnswer(result.data.answers);
      } else {
        Swal.fire('Error', 'Failed to fetch question data', 'error');
      }
    };
    fetchQuestion();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedQuestion = { title, category, difficulty, answers };
    const result = await controller.updateOne('/questions', id, updatedQuestion);

    if (result.data) {
      Swal.fire('Success', 'Question updated successfully!', 'success');
      navigate('/admin/questions'); 
    } else {
      Swal.fire('Error', 'Failed to update question', 'error');
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Edit Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Question Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setQuestionTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
          >
            <option value="HTML">HTML</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="CSS">CSS</option>
            <option value="Git">Git</option>
            <option value="SCSS">SCSS</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Difficulty Level</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficultyLevel(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Answer</label>
          <textarea
            value={answers}
            onChange={(e) => setAnswer(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            rows="4"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="w-1/2 p-3 bg-gray-300 text-white rounded-lg"
            onClick={() => navigate('/admin/questions')}
          >
            Cancel
          </button>
          <button type="submit" className="w-1/2 p-3 bg-black text-white rounded-lg" disabled={loading}>
            {loading ? 'Updating...' : 'Update Question'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditQuestion;
