import React, {useContext} from 'react';
import {BsFillCartPlusFill} from 'react-icons/bs';
import propTypes from 'prop-types';


import './ProductCard.css';
import formateCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/Appcontext';


function ProductCard ({ data }) {

  const { title, thumbnail, price } = data;
  const { cartItens, setCartItens } = useContext(AppContext);

  const handleAddCart = () => setCartItens([...cartItens, data]); 

  return(
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
        alt="product" 
        className="card__image" />

      <div className="card__info">
        <h2 className="card__price">{formateCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
        
      </div>

      <button 
        type="button" 
        className="button__add-cart"
        onClick={handleAddCart}> 
        <BsFillCartPlusFill/>
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
