import React from 'react'
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 import Routes from './Routes/Routes'
import AuthProvider from './Services/Context/AuthContext'


const ROUTER = createBrowserRouter(Routes)
const App = () => {
  return (
   <>
   <AuthProvider>
   <RouterProvider router={ROUTER}/>
   </AuthProvider>
   </>
  )
}

export default App