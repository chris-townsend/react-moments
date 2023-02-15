import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/images/logo-moments.png";
import {
  HomeOutlined,
  LoginOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {
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
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
              <HomeOutlined />
              Home
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
              <LoginOutlined />
              Sign-in
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
              <AccountCircleOutlined />
              Sign-up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
