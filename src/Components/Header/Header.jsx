/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({toggleExplorer}) => {
  return (
    <header>
      <nav>
        <ul className="headerList">
         
            <img
              src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
              alt="Visual Studio Code Styled Portfolio Icon"
              width="18"
              height="10"
              onClick={toggleExplorer}
              style={{ cursor: "pointer" }}
            />
          
          <li><Link to="/about">About</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
