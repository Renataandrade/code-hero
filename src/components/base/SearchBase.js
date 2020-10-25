import React from 'react';

import '../../assets/styles/components/_search-base.scss';
import SearchSVG from '../../assets/images/search.svg';

const SearchBase = () => {
  return (
    <div className="search">
      <input
        type="text" 
        name="search"
        placeholder="Search" 
      />

      <span className="search__icon">
        <img src={SearchSVG} />
      </span>
    </div>
  )
}

export default SearchBase;