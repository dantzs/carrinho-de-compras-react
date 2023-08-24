import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

function SearchBar() {

  const [searchValue, setsearchValue] = useState ('');

  return ( 
    <div >
      <form className="search-bar ">
        
        <input 
          type="search"
          value={searchValue}
          placeholder="Buscar produtos" className="search_input"
          onChange={ ( {target} ) => setsearchValue(target.value)
          }
          required
        />

        { searchValue }

        <button type="submit" className="search_button">
          <BsSearch />
        </button>
      </form>
    </div>
    
  );
  
}

export default SearchBar;
