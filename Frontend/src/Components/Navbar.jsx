import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

// Custom Hook for Theme Management
const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-lightTheme-300 dark:bg-darkTheme-300 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-lightTheme-400 dark:text-darkTheme-400">
            Grocery Store
          </div>

          {/* Links */}
          <div className="space-x-4">
            <Link to="/" className="text-lightTheme-400 dark:text-darkTheme-400 hover:underline">
              Home
            </Link>
            <Link to="/products" className="text-lightTheme-400 dark:text-darkTheme-400 hover:underline">
              Products
            </Link>
            <Link to="/cart" className="text-lightTheme-400 dark:text-darkTheme-400 hover:underline">
              Cart
            </Link>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-lightTheme-200 dark:bg-darkTheme-200 text-lightTheme-400 dark:text-darkTheme-400 hover:bg-lightTheme-100 dark:hover:bg-darkTheme-100"
          >
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      </nav>

      <div className="min-h-screen transition-colors duration-300 bg-lightTheme-100 dark:bg-darkTheme-100">
        <div className="p-6 text-lightTheme-400 dark:text-darkTheme-400">
          <h1 className="text-4xl">Welcome to the Online Grocery Store</h1>
          <p>This is an example of theme switching with Tailwind CSS.</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
