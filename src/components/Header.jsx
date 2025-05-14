import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-6 flex justify-between items-center bg-transparent">
      <div className="text-3xl font-bold tracking-wider">BrainyLingo</div>
      <nav className="space-x-6 text-lg">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <a href="#" className="hover:underline">
          Leaderboard
        </a>
        <a href="#" className="hover:underline">
          Daily Quiz
        </a>
        <a href="#" className="hover:underline">
          Genres
        </a>
      </nav>
      <button className="bg-gradient-to-r from-[#40e0d0] to-[#9370db] px-5 py-2 rounded-full text-white font-semibold">
        Sign Out
      </button>
    </header>
  );
};

export default Header;
