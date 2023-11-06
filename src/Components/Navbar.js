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
        <img src="../images/logo.jpeg"></img>
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
                  <NavLink to="/workingpeopleindia">Working People India</NavLink>
                  </li>
                  <li>
                    <NavLink to="/workingpeople">Working People</NavLink>
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
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                {/* <FaFacebookSquare className="facebook" /> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                {/* <FaInstagramSquare className="instagram" /> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                {/* <FaYoutubeSquare className="youtube" /> */}
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;