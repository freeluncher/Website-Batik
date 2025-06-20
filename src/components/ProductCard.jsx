import React from 'react';
import styles from './ProductCard.module.css';

const getWebpPath = (image) => {
  if (!image) return '';
  // Ambil nama file tanpa slash dan ekstensi
  const match = image.match(/\/([\w-]+)\.jpg$/i);
  if (match) return `/webp/${match[1]}.webp`;
  return image;
};

const ProductCard = ({ product }) => (
  <div className={styles.productCard}>
    <picture>
      <source srcSet={getWebpPath(product.image)} type="image/webp" />
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
        loading="lazy"
      />
    </picture>
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
