import React from 'react'

function homepage(){

    return (
        <div id="page-container">
            <div id="search-container">
                <h3 id="search-heading">Look for the Best Performing Coins</h3>
                <form id="search-box">
                    <input type="text" placeholder="Search Crypto..." id="search-input-box"/>
                    <button type="submit" id="search-btn">Search</button>
                </form>
            </div>
        </div>
    )

}

export default homepage; 