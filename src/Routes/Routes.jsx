import React from 'react'
import User from '../User/User'
import Home from '../User/Pages/Home/Home'
import Favorites from '../User/Pages/Favorites/Favorites'
import Questions from '../User/Pages/Questions/Questions'
import NotFound from '../User/Pages/NotFound/NotFound'
import Admin from '../Admin/Admin'
import Details from '../User/Pages/Details/Details'
import AddQuestion from '../Admin/Pages/AddQuestion/AddQuestion'
import AdminQuestions from '../Admin/Pages/AdminQuestions/AdminQuestions'
// import ProtectedRouted from '../Components/ProtectedRoute/ProtectedRoute'
import Dashboard from '../Admin/Pages/Dashboard/Dashboard'

const Routes = [
    {
        path: "/",
        element: <User />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "favorites",
                element: <Favorites />
            },
            {
                path: "questions",
                children: [
                    {
                        index: true,
                        element: <Questions />
                    },
                    {
                        path: ":id",
                        element: <Details />
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                index:true,
                element: (
                    // <ProtectedRouted>
                        <Dashboard />
                    // </ProtectedRouted>
                ),
            },
            {
                path:"add-question",
                element:(
                    // <ProtectedRouted>
                        <AddQuestion/>
                    // </ProtectedRouted>
                )
            },
            {
                path:"questions",
                element:(
                    // <ProtectedRouted>
                        <AdminQuestions/>
                    // </ProtectedRouted>
                )
            }
        ]
    }
]

export default Routes