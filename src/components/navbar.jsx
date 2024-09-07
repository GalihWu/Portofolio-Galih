import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className="navbar scroll-smooth">
      <header className="header grid grid-cols-3 px-[12%] sticky top-0 bg-white shadow-md flex items-center px-8 py-2">
        {/* logo */}
        <h1 className="w-3/12">
          <a href="#home" className="logo-wrap text-4xl">
            Portofolio
          </a>
        </h1>
        {/* Hamburger icon for mobile */}
        <div className="md:hidden col-span-2 text-right">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* navigation */}
        <nav
          className={`nav col-span-2 md:block ${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:justify-end`}
        >
          <ul className="flex flex-col md:flex-row md:items-center text-base">
            <li className="p-4 border-b-2 border-[#17bed2] border-opacity-0 hover:border-opacity-100 hover:text-[#17bed2] duration-200 cursor-pointer">
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="p-4 border-b-2 border-[#17bed2] border-opacity-0 hover:border-opacity-100 hover:text-[#17bed2] duration-200 cursor-pointer">
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li className="p-4 border-b-2 border-[#17bed2] border-opacity-0 hover:border-opacity-100 hover:text-[#17bed2] duration-200 cursor-pointer">
              <a href="#skill" onClick={closeMenu}>
                Skill
              </a>
            </li>
            <li className="p-4 border-b-2 border-[#17bed2] border-opacity-0 hover:border-opacity-100 hover:text-[#17bed2] duration-200 cursor-pointer">
              <a href="#project" onClick={closeMenu}>
                Project
              </a>
            </li>
            <li className="p-4 border-b-2 border-[#17bed2] border-opacity-0 hover:border-opacity-100 hover:text-[#17bed2] duration-200 cursor-pointer">
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
