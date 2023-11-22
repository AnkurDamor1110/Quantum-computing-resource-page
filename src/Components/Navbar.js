import React, { useState } from "react";
import "./navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <a href="https://www.guptalab.org/" target="_blank" rel="noopener noreferrer">
           <img src="../images/logo.jpeg" alt="Logo"></img>
        </a>
          <h2 className="resource">
         
          <div>
            <span>Q</span>uantum
            <span>C</span>omputing
            </div>
            <span>R</span>esources
            
           
            </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/companies">Companies</NavLink>
            </li>
            <li>
              <NavLink to="/researchpapers">Research papers</NavLink>
            </li>
            <li>
              <NavLink to="/tools">Tools</NavLink>
            </li>
            <li className="hoverable">
              <span>Tutorials</span>
              <div className="sub-menu">
                <ul>
                  <li>
                  <NavLink to="/youtubecontent">YouTube Content</NavLink>
                  </li>
                  <li>
                    <NavLink to="/courses">Courses</NavLink>
                  </li>
                  <li>
                    <NavLink to="/books">Books</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/simulators">Simulators</NavLink>
            </li>
            <li>
              <NavLink to="/patents">Patents</NavLink>
            </li>
            <li>
              <NavLink to="/workshops">workshops</NavLink>
            </li>
            <li className="hoverable">
              <span>Working People</span>
              <div className="sub-menu">
                <ul>
                  <li>
                  <NavLink to="/workingpeopleindia">National People</NavLink>
                  </li>
                  <li>
                    <NavLink to="/workingpeople">International People</NavLink>
                  </li>
                </ul>
                </div>
                </li>
            <li>
              <NavLink to="/articles">News</NavLink>
            </li>
          </ul>
          
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
          <button className="hamburger-button"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </button>

          </div>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;