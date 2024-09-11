// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';
import SearchIcon from './SearchIcon';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Type vehicle Number..." 
        value={value} 
        onChange={onChange} 
      />
       <SearchIcon className="search-icon" />
    </div>
  );
};

export default SearchBar;
