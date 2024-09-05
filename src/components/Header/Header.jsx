import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav'
function Header() {
  return (
    <header className="bg-blue-300 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
      <nav className = 'flex justify-between items-center w-[92%]'>
        <div>
          <img className = 'w-16' src = 'https://cdn-icons-png.flaticon.com/256/14128/14128742.png' alt = '..'/>
        </div>
        <div>
          <ul className = 'flex md:flex-row flex-col items-center gap-[4vw]'>
            <li>
              <a className = 'hover:text-gray-500' href = "#">Home</a>
            </li>
            <li>
              <a className = 'hover:text-gray-500' href = "#">About</a>
            </li>
            <li>
              <a className = 'hover:text-gray-500' href = "#">Resources</a>
            </li>
          </ul>
        </div>
        <div>
          <button className = 'bg-[#333539] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Log In</button>
        </div>


      </nav>

    </header>
  );
}

export default Header;