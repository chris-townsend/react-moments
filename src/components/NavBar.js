import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo-moments.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  LoginOutlined,
  AccountCircleOutlined,
  PostAddOutlined,
  FeedOutlined,
  FavoriteOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import { Avatar } from "@mui/material";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)){
        setExpanded(false)

      }
    }
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  },[ref])

const handleSignOut = async () => {
  try {
    await axios.post("dj-rest-auth/logout/")
    setCurrentUser(null)
  } catch (err) {
    console.log(err)
  }
}

  const addPostIcon = (
    <NavLink
      to="/posts/create"
      className={styles.NavLink}
      activeClassName={styles.Active}
    >
      <PostAddOutlined />
      Add Post
    </NavLink>
    
  );

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/feed"
      >
        <FeedOutlined />
        Feed
      </NavLink>
      <NavLink
        to="/liked"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <FavoriteOutlined />
        Liked
      </NavLink>
      <NavLink
        to="/"
        className={styles.NavLink}
        onClick = {handleSignOut}
      >
        <LogoutOutlined/>
        Sign out
      </NavLink>
      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.NavLink}
        onClick = {() => {}}
      > 
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
        
      </NavLink>
    </>
  );
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
        <AccountCircleOutlined />
        Sign up
      </NavLink>
      
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
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
