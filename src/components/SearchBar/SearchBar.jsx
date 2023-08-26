import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProducst from '../../api/fetchProducts';
import AppContext from '../../context/Appcontext';

function SearchBar() {

  const [searchValue, setsearchValue] = useState ('');

  const { setProducts } = useContext(AppContext);

  const hendleSearch = async (event) => {
    event.preventDefault();
    
    const products = await fetchProducst(searchValue);

    setProducts(products);
    setsearchValue('');

  };

  return ( 
    <div >
      <form className="search-bar " onSubmit={hendleSearch}>
        
        <input 
          type="search"
          value={searchValue}
          placeholder="Buscar produtos" className="search_input"
          onChange={ ( {target} ) => setsearchValue(target.value)
          }
          required
        />

        <button type="submit" className="search_button">
          <BsSearch />
        </button>
      </form>
    </div>
    
  );
  
}

export default SearchBar;
