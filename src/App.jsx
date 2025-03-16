import React from 'react'
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 import Routes from './Routes/Routes'


const ROUTER = createBrowserRouter(Routes)
const App = () => {
  return (
   <>
   <RouterProvider router={ROUTER}/>
   </>
  )
}

export default App