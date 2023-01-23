import React from 'react'

const GifList = ({gifs}) => {
  return (
    <div >
    <ul>
      {gifs.map((gif) => (
        <li style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', border: '2px solid #ff6550', margin: '2px'}} key={gif.url}>
          <img  src={gif.url} alt="searched gif" />
        </li>
      ))}
  </ul>
  </div>
    
  )
}

export default GifList
