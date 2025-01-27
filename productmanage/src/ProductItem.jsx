import React from 'react';

const ProductItem = ({ product, darkMode }) => {
  return (
    <div className={`mb-4 p-4 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
      <h2 className={`text-lg font-bold ${darkMode ? 'text-gray-300' : 'text-black'}`}>{product.name}</h2>
      <p className={`text-md ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
        <span className={`inline-block bg-green-500 text-white py-1 px-3 rounded-full`}>
          Price: ${product.price}
        </span>
      </p>
    </div>
  );
};

export default ProductItem;
