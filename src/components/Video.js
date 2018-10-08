import React from 'react';
import PropTypes from 'prop-types';

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string
};
export default function Video({ src, title = 'untitled' }) {
  return (
    <iframe
      title={title}
      allowFullScreen
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${src}`}
      frameBorder="0"
    />
  );
}
