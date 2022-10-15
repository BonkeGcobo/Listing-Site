import React from 'react'
import './search.css'
import './Header'
import './FilterItems'
import FilterItems from './FilterItems';

const Search = () =>(
    <div className='search_container'>
        <h1 className='title'>Find Places to Rent</h1>
        <div className='search_bar_button'>
          <input type="text" placeholder='search'/>
          <button className='search-button'>Search</button>
        </div>
        <FilterItems/>
    </div>
);
export default Search