import React, { useState } from 'react';

const GifSearch = ({ submitSearch }) => {
    const [searchItem, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        submitSearch(searchItem);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Thinking of a GIF?</label>
                <input id="search" placeholder='Type here' type="text" value={searchItem} onChange={handleSearch}/>
                <button type="submit">Click here!</button>
            </form>
        </div>
    );
};

export default GifSearch;
