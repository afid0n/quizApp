import { NavLink } from "react-router-dom";
import React from "react";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white text-black border h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-4 ">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "hover:bg-gray-200" : ""
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/questions"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-black text-white" : "hover:bg-gray-200"
            }`
          }
        >
          Questions
        </NavLink>
        <NavLink
          to="/admin/add-question"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? "bg-black text-white" : "hover:bg-gray-200"
            }`
          }
        >
          Add Question
        </NavLink>
      </nav>
      <button className="mt-5 ml-2 bg-red-500 text-white p-1 rounded-lg hover:bg-red-600 transition">
        Log Out
      </button>
    </aside>
  );
};

export default AdminSidebar;
