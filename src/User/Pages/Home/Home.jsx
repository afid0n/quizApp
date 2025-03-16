import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="hero py-4 px-26" >
        <div className="text-center ">
        <h1 className='text-5xl m-2 font-bold'>Welcome To DevQuiz</h1>
        <p className='text-xl w-1/2 mx-auto mt-5'>Test your knowledge with our collection of developer questions across various categories. From HTML to React, we've got you covered.</p>
        </div>
        <div className="hero__buttons flex justify-center items-center gap-6 mt-6">
          <button className='flex rounded bg-black text-white items-center gap-4 border py-2 px-6'><NavLink to={"/questions"}>Browse questions</NavLink><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
          </button>
          <button className='border rounded py-2 px-6'><NavLink  to={"/favorites"}>My Favorites</NavLink></button>
        </div>
        <div className="card flex gap-4 mt-8">
          <div className="card__questions border w-1/2  rounded p-5">
            <h2 className='text-2xl font-bold'>300+ Questions</h2>
            <p className='text-sm '>Covering all major web technologies</p>
            <p className='mt-4'>Our database includes questions on HTML, CSS, JavaScript, React, and more to help you prepare for interviews.</p>
          </div>
          <div className="card__difficulty border w-1/2 rounded p-5 ">
            <h2 className='text-2xl font-bold'>Difficulty Levels</h2>
            <p className='text-sm mt-4'>From beginner to expert</p>
            <p className='mt-4'>Questions are categorized by difficulty level so you can challenge yourself appropriately.</p>
          </div>
          <div className="card__favorites border w-1/2  rounded p-5">
            <h2 className='text-2xl font-bold'>Save Favorites</h2>
            <p className='text-sm'>Create your own study list</p>
            <p className='mt-4'>Save your favorite questions to review later and track your progress over time.</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home