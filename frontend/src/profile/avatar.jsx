import React from "react";

export const Avatar = ({ src, className }) => {
  return (
    <img
      src={src || "/default-avatar.png"}
      alt="User Avatar"
      className={`w-16 h-16 rounded-full border ${className}`}
    />
  );
};