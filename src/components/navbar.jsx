import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

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
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="p-4 border-b-2 border-[#17bed2] border-opacity-0 hover:border-opacity-100 hover:text-[#17bed2] duration-200 cursor-pointer">
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeMenu}
              >
                Experience
              </Link>
            </li>
            <li className="p-4 border-b-2 border-[#17bed2] border-opacity-0 hover:border-opacity-100 hover:text-[#17bed2] duration-200 cursor-pointer">
              <Link
                to="skill"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeMenu}
              >
                Skill
              </Link>
            </li>
            <li className="p-4 border-b-2 border-[#17bed2] border-opacity-0 hover:border-opacity-100 hover:text-[#17bed2] duration-200 cursor-pointer">
              <Link
                to="project"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeMenu}
              >
                Project
              </Link>
            </li>
            <li className="p-4 border-b-2 border-[#17bed2] border-opacity-0 hover:border-opacity-100 hover:text-[#17bed2] duration-200 cursor-pointer">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
