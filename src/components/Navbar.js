import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="container">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="login">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="register">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/userdetails">UserDetails</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/adduser">AddUser</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="Portfolio">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
