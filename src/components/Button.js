import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  style: PropTypes.object
};
export default function Button({ color = 'blue', children, style }) {
  return (
    <button
      className={css`
        align-items: center;
        font-weight: bold;
        font-size: 1.5rem;
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        padding: 1rem;
        background: ${color};
        justify-content: center;
        min-width: 10rem;
        color: #fff;
        &:hover {
          opacity: 0.8;
          transition: opacity 0.5s;
        }
      `}
      style={style}
    >
      {children}
    </button>
  );
}
