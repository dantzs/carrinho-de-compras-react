import React, { useContext } from 'react';

import {BsCartDash} from 'react-icons/bs';
import propTypes from 'prop-types';

import './CartItem.css';
import formateCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/Appcontext';

function CartItem ({data}) {

  const {cartItens, setCartItens} = useContext (AppContext);
  const {id, thumbnail,title, price } = data;
  
  const handleRemoveItem = () => {
    const updateItens = cartItens .filter((item) => item.id != id);
    setCartItens(updateItens);
  };

  
  return (
    <section className="cart-item">
      <img
        src={ thumbnail } 
        alt="imagem do produto" 
        className="cart-item-image"/>

        
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price"> {formateCurrency(price, 'BRL')} </h3>

        <button
          type="button"
          className="button-remove-item"
          onClick={handleRemoveItem}> 
          <BsCartDash/>
        </button>
      </div>

    </section>

  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
