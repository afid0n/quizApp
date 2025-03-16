import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'



const Header = () => {
    return (
        <>
            <header className='border-b '>
                <div className='flex py-5 px-12 flex dark:bg-sky-500 justify-between  items-center'>
                    <div className='flex gap-2 font-bold text-2xl items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg><NavLink to={"/"}> DevQuiz</NavLink>
                    </div>
                    <ul className='flex gap-8 items-center'>
                        <li className=''><NavLink className={({ isActive }) => `${isActive ? styles.active : ""} flex items-center gap-2 `} to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg> Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? styles.active : ""} flex items-center gap-2`} to={"/questions"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg> Questions</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? styles.active : ""} flex items-center gap-2`} to={"/favorites"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>Favorites</NavLink></li>
                        <li className='flex gap-2'><button className='border bg-black text-white py-1 px-3 rounded '><NavLink to={"/admin"}>Admin</NavLink></button></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header