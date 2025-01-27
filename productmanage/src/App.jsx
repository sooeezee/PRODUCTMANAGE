import React, { useState } from 'react';
import ProductManager from './ProductManager';
import './index.css'; // Ensure this file includes Tailwind CSS

const App = () => {
  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addProduct = (e) => {
    e.preventDefault();
    if (name && price) {
      setProducts([...products, { id: products.length + 1, name, price }]);
      setName('');
      setPrice('');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-4">Product Management App</h1>
      <button onClick={toggleDarkMode} className="mb-4 p-2 border rounded">{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <form onSubmit={addProduct} className="mb-4 flex flex-col items-center">
        <input 
          type="text" 
          placeholder="Product Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className={`mb-2 p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`} 
        />
        <input 
          type="text" 
          placeholder="Product Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          className={`mb-2 p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`} 
        />
        <button type="submit" className="p-2 border rounded">{darkMode ? 'Add Product (Dark Mode)' : 'Add Product (Light Mode)'}</button>
      </form>
      <ProductManager products={products} darkMode={darkMode} />
    </div>
  );
};

export default App;
