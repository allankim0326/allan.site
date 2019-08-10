import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { css } from 'emotion';

Audio.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string
};
export default function Audio({ src, title = 'untitled' }) {
  return (
    <div style={{ position: 'relative', width: 500, height: 300 }}>
      <ReactPlayer
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        `}
        width="100%"
        height="100%"
        url={`https://www.youtube.com/embed/${src}`}
        controls
        config={{
          youtube: { preload: true }
        }}
      />
    </div>
  );
}
