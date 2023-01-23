import React, { useState } from 'react';

const GifSearch = ({ submitSearchItem }) => {
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = (e) => {
        setSearchItem(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submitSearchItem(searchItem);
    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Thinking of a GIF?</label>
        <br></br>
        <input
          id="search"
          placeholder="Type here"
          type="text"
          value={searchItem}
          onChange={handleSearch}
        />
        <button type="submit">Click here!</button>
      </form>
    </div>
  );
};

export default GifSearch;
