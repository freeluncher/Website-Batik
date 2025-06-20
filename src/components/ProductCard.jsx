import React from 'react';

const ProductCard = ({ product }) => (
  <div style={{
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(77, 54, 24, 0.08)',
    marginBottom: '2.5rem', // menambah jarak antar card
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '350px',
    margin: '0 auto',
    border: '1.5px solid #bfa77a' // aksen heritage
  }}>
    <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', background: '#f5eee6' }} />
    <div style={{ padding: '1rem', background: '#fff' }}>
      <h2 style={{ fontSize: '1.1rem', margin: 0, color: '#2d1c0b', fontFamily: 'Playfair Display, serif', letterSpacing: '1px' }}>{product.name}</h2>
      <p style={{ color: '#4e2e0e', margin: '0.5rem 0', fontWeight: 'bold', fontFamily: 'Inter, Arial, sans-serif' }}>Rp{product.price.toLocaleString()}</p>
      <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: '#2d1c0b', fontFamily: 'Inter, Arial, sans-serif' }}>{product.description}</p>
      <a
        href={`https://wa.me/62895414954962?text=Halo%20saya%20mau%20beli%20${encodeURIComponent(product.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          background: '#2d1c0b',
          color: '#fff',
          textAlign: 'center',
          padding: '0.7rem',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          letterSpacing: '1px',
          fontFamily: 'Inter, Arial, sans-serif',
          boxShadow: '0 1px 4px rgba(77, 54, 24, 0.10)'
        }}
      >
        Beli via WhatsApp
      </a>
    </div>
  </div>
);

export default ProductCard;
