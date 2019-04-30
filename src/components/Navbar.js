import React from 'react';
import Button from './Button';
import { css } from 'emotion';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className={css`
        padding: 1rem;
        display: flex;
        align-items: center;
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
            fontWeight: 'bold',
            color: '#92ff82'
          }}
          to="/"
        >
          Allan
        </Link>
        <div>
          <ul
            className={css`
              > li {
                > a {
                  font-size: 1.5rem;
                  &.active {
                    font-weight: bold;
                  }
                }
                margin-left: 2rem;
              }
            `}
            style={{ display: 'flex' }}
          >
            <li
              className={css`
                > a {
                  color: #82b3ff;
                }
              `}
              style={{ marginLeft: 0 }}
            >
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li
              className={css`
                > a {
                  color: #b482ff;
                }
              `}
            >
              <NavLink className="nav-link" activeClassName="active" to="/chat">
                Chat
              </NavLink>
            </li>
            <li
              className={css`
                > a {
                  color: #f482ff;
                }
              `}
            >
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
        <Button color="#ff8282">Log In</Button>
      </div>
    </nav>
  );
}

export default Navbar;
