import React from "react";

// Card Component
export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white p-4 rounded-2xl shadow-md ${className}`}>
      {children}
    </div>
  );
};

// Button Component
export const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Avatar Component
export const Avatar = ({ src, className }) => {
  return (
    <img
      src={src || "/default-avatar.png"}
      alt="User Avatar"
      className={`w-16 h-16 rounded-full border ${className}`}
    />
  );
};