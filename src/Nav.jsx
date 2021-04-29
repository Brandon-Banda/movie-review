import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <Link style={{ color: "white", textDecoration: "none" }} to='/'>
        <h1> movie-review</h1>
      </Link>
      <ul className='nav-links'>
        <Link style={navStyle} to='/activity'>
          <li style={{ fontSize: "20px" }}>Activity</li>
        </Link>
        <Link style={navStyle} to='/navy'>
          <li style={{ fontSize: "20px" }}>Naval-Project</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
