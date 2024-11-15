// SpecialButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const AddToCartButton = ({ text, onClick, link, extraClasses = '' }) => {
  return (
    <div className="mt-8 text-center">
      {link ? (
        <Link
          to={link}
          className={`px-8 py-4 text-white font-bold text-lg rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-green-500 hover:to-purple-700 transition duration-300 w-full sm:w-auto ${extraClasses}`}
        >
          {text}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`px-10 py-4 text-white font-bold text-lg rounded-3xl bg-ButtonGreen transition duration-300 w-full sm:w-auto ${extraClasses}`}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
