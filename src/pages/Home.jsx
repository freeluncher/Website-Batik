import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/src/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.katalogTitle}>
          Katalog Batik
        </h1>
        <div className={styles.productList}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
