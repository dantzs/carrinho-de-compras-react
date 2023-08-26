import React, { useContext } from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/Appcontext';
import formateCurrency from '../../utils/formatCurrency';

function Cart () {

  const { cartItens, isCartVisible } = useContext(AppContext);
  const totalPrice = cartItens.reduce((acc, item) => {
    return item.price + acc;
  }, 0);


  return(
    <section className={`cart ${isCartVisible ? 'active' : ''}`}>
      <div className="cart-itens">
        {
          cartItens.map((cartItens) => <CartItem key={cartItens.id} data={cartItens} />)
        }

      </div>

      <div className="cart-resume">{formateCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
