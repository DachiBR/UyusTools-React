import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function CustomLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="custom-link">
        {children}
      </Link>
    </li>
  );
}

const Menu = () => (
  <>
    <CustomLink to="/home">Home</CustomLink>
    <CustomLink to="/products">Products</CustomLink>
    <CustomLink to="/about">About</CustomLink>
    <CustomLink to="/contact">Contact</CustomLink>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">

      <div className="navbar-links">
        <div className="navbar-links_logo">
          <p><CustomLink to="/home">UYUSTOOLS</CustomLink></p>  
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
