import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex flex-row justify-between p-1 bg-slate-500">
      <header>
        <div className="flex items-center">
         <img src="./pg.jpg" alt="Logo" className="w-20 h-20 mr-4 rounded-full border-sky-100"/>
        <nav > 
          <ul className="flex flex-row space-x-8">
            <li>
              <Link className="font-bold text-3xl hover:text-blue-800" to="/home">Home</Link>
            </li>
            <li>
              <Link className="font-bold text-3xl hover:text-blue-800" to="/about">About Us</Link>
            </li>
            <li>
              <Link className="font-bold text-3xl hover:text-blue-800" to="/dashboard">Dashboard</Link>
            </li>
            
          </ul>
        </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
