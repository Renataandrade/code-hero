import React from 'react';

import SearchSVG from '../../assets/images/search.svg';

const SearchBase = ({ filter }) => {
  return (
    <div className="search">
      <p className="search__title">
        Nome do personagem
      </p>

      <div className="search__group">
        <input
          type="text" 
          name="search"
          placeholder="Search"
          onChange={(e) => {
            filter(e.target.value)
          }}
        />

        <span className="search__icon">
          <img 
            src={SearchSVG}
            alt="Search" 
          />
        </span>
      </div>
    </div>
  )
}

export default SearchBase;