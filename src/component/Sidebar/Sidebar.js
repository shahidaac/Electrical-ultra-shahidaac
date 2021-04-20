import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch(`https://serene-crag-41999.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        {
          (users.role = "admin" ? (
            <>
              <Link to="/addService"> Add Services</Link>
              <Link to="/orderList"> Order Lists</Link>
              <Link to="/makeAdmin"> Make Admin</Link>
              <Link to="/manageService"> Manage Services</Link>
              <Link to="/bookingList"> Booking Lists</Link>
              <Link to="/addReview"> Add Reviews</Link>
              <Link to="/"> Book Services</Link>
            </>
          ) : (
            <>
              <Link to="/bookingList"> Booking Lists</Link>
              <Link to="/addReview"> Add Reviews</Link>
              <Link to="/"> Book Services</Link>
            </>
          ))
        }
      </Nav>
    </div>
  );
};

export default Sidebar;
