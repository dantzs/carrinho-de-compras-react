import React, {useState, useEffect, useContext} from 'react';
import fetchProducst from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

import './Products.css';
import Loading from '../Loading/Loading';
import AppContext from '../../context/Appcontext';

function Products () {

  const { products,setProducts} = useContext(AppContext);

  const [loading, setLoading] = useState(true);


  useEffect (() => {
    fetchProducst ('iphone').then((response) => {
      setProducts(response);
      setLoading(false);

    });

  },[]);


  return (
    (loading && <Loading/> ) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product}/>)}
      </section>)
  );
}

export default Products;
