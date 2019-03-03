import React from 'react';
import { css } from 'emotion';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className={css`
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        a {
          &:hover {
            text-decoration: none;
          }
        }
      `}
    >
      <div style={{ display: 'flex', width: '100%' }}>
        <Link
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}
          to="/"
        >
          Allan
        </Link>
        <div>
          <ul style={{ display: 'flex' }}>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" activeClassName="active" to="/chat">
                Chat
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/videos"
              >
                Videos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button>Log In</button>
      </div>
    </nav>
  );
}

export default Navbar;
