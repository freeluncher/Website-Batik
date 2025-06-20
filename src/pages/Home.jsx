import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/src/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ background: '#f5eee6', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.3rem', margin: '1rem 0', textAlign: 'center', color: '#2d1c0b', fontFamily: 'Georgia, serif', letterSpacing: '2px' }}>
          Katalog Batik
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
