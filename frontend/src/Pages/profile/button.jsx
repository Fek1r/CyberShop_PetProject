import React from "react";


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
