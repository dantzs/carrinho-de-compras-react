import React, {useState, useEffect} from 'react';
import fetchProducst from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

import './Products.css';

function Products () {

  const [products, setProducts] = useState([]);


  useEffect (() => {
    fetchProducst ('iphone').then((response) => {
      
      setProducts(response);

    });

  }, []);

  return (
    <section className="products container">

      {
        products.map((product) => <ProductCard key={product.id} data={product}/>)
      }
      
    </section>
  );
}

export default Products;
