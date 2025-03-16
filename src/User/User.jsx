import React from 'react'
import Header from './Layout/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'




const User = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default User