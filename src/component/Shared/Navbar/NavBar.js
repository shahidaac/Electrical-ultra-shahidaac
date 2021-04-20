import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../../images/logo.png'
import { userContext } from '../../../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
      <div className="hero-header">
        <div className="container">
          <Navbar expand="lg">
            <Navbar.Brand href="#home">
              <img src={logo} alt="Company logo" />
              <span className="logo-text">Electrical Ultra</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/">HOME</Link>
                <Link to="/">ABOUT US </Link>
                <Link to="/">SERVICES</Link>
                <Link to="/">CONTACT US</Link>
                <Link to="/admin">ADMIN</Link>
                {loggedInUser.email ? (
                  <a>{loggedInUser.name}</a>
                ) : (
                  <Link className="log-btn btn-animated" to="/login">
                    Login
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
};

export default NavBar;