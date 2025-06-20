import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => (
  <div className={styles.productCard}>
    <img src={product.image} alt={product.name} className={styles.productImage} />
    <div className={styles.productContent}>
      <h2 className={styles.productName}>{product.name}</h2>
      <p className={styles.productPrice}>Rp{product.price.toLocaleString()}</p>
      <p className={styles.productDesc}>{product.description}</p>
      <a
        href={`https://wa.me/62895414954962?text=Halo%20saya%20mau%20beli%20${encodeURIComponent(product.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.productBtn}
      >
        Beli via WhatsApp
      </a>
    </div>
  </div>
);

export default ProductCard;
