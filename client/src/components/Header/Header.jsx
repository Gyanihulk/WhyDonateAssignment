import React from "react";
import "./header.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrap">
        <ul className="header__left">
          <li>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
        </ul>
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