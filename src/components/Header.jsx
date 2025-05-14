import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to toggle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="p-6 flex justify-between items-center bg-transparent">
      <div className="text-3xl font-bold tracking-wider">BrainyLingo</div>
      <nav className="space-x-6 text-lg flex items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <a href="#" className="hover:underline">
          Leaderboard
        </a>
        <a href="#" className="hover:underline">
          Daily Quiz
        </a>

        {/* Genres Dropdown (in-line) */}
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="hover:underline text-lg text-white hover:text-gradient-blue"
          >
            Genres
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#1a1a3b] rounded-xl shadow-lg w-48 z-10">
              <ul className="text-white">
                <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Sci-Fi</li>
                <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Fantasy</li>
                <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Mystery</li>
                <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Adventure</li>
                <li className="px-4 py-2 hover:bg-purple-700 cursor-pointer">Horror</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <button className="bg-gradient-to-r from-[#40e0d0] to-[#9370db] px-5 py-2 rounded-full text-white font-semibold">
        Sign Out
      </button>
    </header>
  );
};

export default Header;
