import React from 'react'
import Header from '../User/Layout/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../User/Layout/Footer/Footer'
import AdminSidebar from './Layout/AdminSidebarr/AdminSidebar'

const Admin = () => {
  return (
   <>
   <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-grow">
        <AdminSidebar />

        <div className="flex-grow p-4">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
   </>
  )
}

export default Admin