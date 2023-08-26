import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './Appcontext';

function Provider ({children}) {

  const [products, setProducts] = useState([]);
  const [cartItens, setCartItens] = useState([]);
  const [Loading, SetLoading] = useState([true]);
  const [isCartVisible, setIsCartVisible] = useState();
  


  const value = {
    products,
    setProducts,
    Loading,
    SetLoading,
    cartItens,
    setCartItens,
    isCartVisible, 
    setIsCartVisible
  };

  return(
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
