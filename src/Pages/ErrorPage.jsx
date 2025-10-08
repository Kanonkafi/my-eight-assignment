import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="error"
        className="w-28 h-28 mb-5"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-500 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;