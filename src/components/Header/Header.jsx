import React, {  useRef,useState,useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";
import ToggleSwitch from "../ToggleSwitch";
import Logout from "../LogOut";
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = (props) => {
  const menuRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn)
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active"); 
  console.log(isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("zazu")) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  },[navigate]);


  return (
    <div className="main__navbar">
      <Container>
        <div className="navigation__wrapper d-flex align-items-center justify-content-between">
          <span className="mobile__menu">
            <i className="ri-menu-line" onClick={toggleMenu}>
              {" "}
            </i>{" "}
          </span>{" "}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu">
              {" "}
              {navLinks.map((item, index) => (
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__item" : "nav__item"
                  }
                  key={index}
                >
                  {" "}
                  {item.display}{" "}
                </NavLink>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div className="nav__right">
            <div className="search__box">
              <input type="text" placeholder="Search" />
              <span>
                <i className="ri-search-line"> </i>{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
          {/* ================Register and Login ======================*/}{" "}
          <div className="Register_login">
            
            <Row>
              <Col lg="6" md="6" sm="6">
                <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                  {isLoggedIn && (
                    <ToggleSwitch
                      label="pagetoggle"
                    />
                  )}
                  {!isLoggedIn && (
                    <Link
                      to="/login"
                      className=" d-flex align-items-center gap-2" 
                    >
                      <i className="ri-login-circle-line" > </i> Login{" "}
                    </Link>
                  )}{" "}
                  {!isLoggedIn && (
                    <Link
                      to="/signup"
                      className=" d-flex align-items-center gap-2"
                    >
                      <i className="ri-user-line"> </i> Register{" "}
                    </Link>
                  )}{"  "}
                  {isLoggedIn && (
                    <div
                      className=" d-flex align-items-center gap-2"
                    >
                    </div>
                  )}{"  "}

                  {isLoggedIn &&
                    <Logout
                    isLoggedIn={props.isLoggedIn}
                    setIsLoggedIn = {props.setIsLoggedIn}
                  />
                    }{" "}
                </div>{" "}
                
              </Col>{" "}
            </Row>{" "}
          </div>{" "}
          {/* ================Register and Login Ends======================*/}{" "}
        </div>{" "}
      </Container>{" "}
    </div>
  );
};

export default Header;
