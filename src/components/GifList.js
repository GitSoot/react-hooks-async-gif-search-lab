import React from 'react'

const GifList = ({gifs}) => {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif.url}>
          <img  src={gif.url} alt="searched gif" />
        </li>
      ))}
  </ul>
    
  )
}

export default GifList
