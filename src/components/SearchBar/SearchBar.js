import React from 'react'
import "./SearchBar.css"

function SearchBar() {
    return (
        <div>
            <div className="search_bar">
                <input type="text" placeholder="  Search stories..." />
            </div>
            <div className="box">
                <img src="search_icon.png" alt="search" id="search" />
            </div>
        </div>

    )
}

export default SearchBar
