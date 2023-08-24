import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CardButton from '../CartButton/CartButton';

import './Header.css';

function Header () {
  return (
    <header className="header">
      <div className="container">

        <SearchBar/>
        <CardButton/>
      </div>
    </header>
  );
}

export default Header;
