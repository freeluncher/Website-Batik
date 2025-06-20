import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/src/data/products.json')
      .then(res => {
        if (!res.ok) throw new Error('Gagal memuat data produk');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.katalogTitle}>
          Katalog Batik
        </h1>
        {loading && <div style={{textAlign:'center', margin:'2rem 0'}}>Memuat data produk...</div>}
        {error && <div style={{color:'#b94a48', textAlign:'center', margin:'2rem 0'}}>Error: {error}</div>}
        <div className={styles.productList}>
          {!loading && !error && products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
