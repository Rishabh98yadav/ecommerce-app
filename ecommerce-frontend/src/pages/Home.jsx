import React, { useEffect, useState } from 'react';
import API from '../services/api';
import ProductCard from '../components/ProductCard';
import styles from '../styles/ProductCard.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
