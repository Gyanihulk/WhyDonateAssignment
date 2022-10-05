import React from "react";
import "./header.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";

//Header Component to make naviagtion easier to home and login page 
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrap">

        {/* Left section  */}
        <ul className="header__left">
          <li>
            <Link to="/">
              <a> Home</a>
            </Link>
          </li>
        </ul>

        {/* Right section  */}
        <div className="header__right">
          <Link to="/login">
            <button type="button" className="custom-btn btn-3">
              <span>Login</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
