import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo-moments.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";
import {
  HomeOutlined,
  LoginOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";

const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);

  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <LoginOutlined />
        Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <AccountCircleOutlined />Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <HomeOutlined />
              Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
