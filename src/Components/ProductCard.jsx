import React from 'react';

const ProductCard = ({ productName, brandName, price, onEdit, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
      <div>
        <h3 className="font-bold text-lg">{productName}</h3>
        <p className="text-gray-600">{brandName}</p>
        <p className="text-gray-700 mt-1">Price: {price}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onEdit}
          className="bg-yellow-400 px-4 py-2 rounded text-white hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
