import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { css } from 'emotion';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [modalShown, setModalShown] = useState(false);
  function login() {
    setModalShown(!modalShown);
  }
  return (
    <nav
      className={css`
        padding: 0.8rem;
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
      {modalShown && <Modal />}
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
              <NavLink className="nav-link" activeClassName="active" to="/gifs">
                Gifs
              </NavLink>
            </li>
            <li
              className={css`
                > a {
                  color: #b482ff;
                }
              `}
            >
              <NavLink className="nav-link" activeClassName="active" to="/Info">
                Info
              </NavLink>
            </li>
            <li
              className={css`
                > a {
                  color: #00ff7f;
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
        <Button color="#ff8282" onClick={login}>
          Log In
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
