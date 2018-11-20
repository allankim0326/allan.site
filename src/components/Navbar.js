import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Allan
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/chat">
              Chat
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/videos">
              Videos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
