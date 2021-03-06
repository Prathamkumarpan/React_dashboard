import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="navbar">
          <NavLink to="/" className="links">Home</NavLink>
          <NavLink to="/dashboard" className="links">dashboard</NavLink>
          <NavLink to="/mycourses" className="links">My courses</NavLink>
          <NavLink to="/achievements" className="links">Achievements</NavLink>
          <NavLink to="/forum" className="links">forum</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
