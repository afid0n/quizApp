import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <h1 className="text-9xl font-extrabold tracking-widest text-gray-600 dark:text-gray-300">404</h1>
            <p className="text-2xl mt-4">Oops! Page Not Found</p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
                The page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-black hover:bg-blue-700 rounded-lg transition duration-300 shadow-md"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
