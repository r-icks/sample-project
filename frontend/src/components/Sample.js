import React from "react";

const Sample = ({ text }) => {
  return (
    <div className="max-w-screen-lg mx-auto my-4 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <p className="text-lg leading-relaxed">{text}</p>
    </div>
  );
};

export default Sample;
