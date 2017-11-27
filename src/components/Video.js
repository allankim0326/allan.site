import React from 'react'

export default function Video({src}) {
  return (
    <iframe
      allowFullScreen
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${src}`}
      frameborder="0"
    >
    </iframe>
  )
}