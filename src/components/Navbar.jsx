import React, { useState } from "react";
import logo from "../images/logo.png";
import "../App.css";
import { RxCross2 } from "react-icons/rx";
import { CgMail } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

const navbar = () => {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <div className="">
      <div className="logo-section px-lg-5">
        <div className="logo px-sm-2  px-lg-1 ">
          <img src={logo} alt="" />
          <p className="px-2 nav-text">
            <CgMail className="icon footer-icon-gmail" /> purbinepal11@gmail.com
          </p>
        </div>
      </div>
      <nav className="navbar navbar-expand-sm bg-body-tertiary py-0">
        <div className="container-fluid py-2 mx-xs-0">
          <SearchBar
           className={"d-block d-sm-none"} 
           />
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {showNav ? (
              <RxCross2 className="cross-bar" />
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>
          <div className="collapse navbar-collapse px-lg-4" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item px-sm-2 px-lg-3">
                <a className="nav-link " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item px-sm-2 px-lg-3">
                <a className="nav-link" href="/">
                  Places
                </a>
              </li>
              <li className="nav-item px-sm-2 px-lg-3">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <SearchBar className={""}/>
          </div>
        </div>
        <div
          className={`nav-links d-block d-sm-none  ${
            showNav ? "show-nav" : " "
          }`}
        >
          <ul className="nav-links-ul list-unstyled">
            <li className="p-2 py-2   px-3">Home</li>
            <li className="p-2 py-2 px-3">Places</li>
            <li className="p-2 py-2 px-3">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
