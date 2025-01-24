/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <ul className={`headerList ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/">
            <img
              src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
              alt="Visual Studio Code Styled Portofolio Icon"
              width="18"
              height="10"
            />
          </Link>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
        </ul>

        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
