import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Поиск..." />
    <button>Найти</button>
    <div className="location">Усть-Каменогорск</div>
  </div>
);

export default SearchBar;
