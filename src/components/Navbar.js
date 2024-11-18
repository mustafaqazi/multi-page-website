// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Optional for Navbar-specific styling

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">My Website</h1>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
