import React from 'react';
import ProductItem from './ProductItem';

const ProductManager = ({ products, darkMode }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {products.length === 0 ? (
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>No products available</p>
      ) : (
        products.map((product) => (
          <ProductItem key={product.id} product={product} darkMode={darkMode} />
        ))
      )}
    </div>
  );
};

export default ProductManager;
