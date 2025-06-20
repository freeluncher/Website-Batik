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
        alt={product.name + ' - Batik Tosri'}
        className={styles.productImage}
        loading="lazy"
        width="320"
        height="400"
        decoding="async"
      />
    </picture>
    <div className={styles.productContent}>
      <h2 className={styles.productName} tabIndex="0">{product.name}</h2>
      <p className={styles.productPrice} aria-label={`Harga Rp${product.price.toLocaleString()}`}>Rp{product.price.toLocaleString()}</p>
      <p className={styles.productDesc}>{product.description}</p>
      <a
        href={`https://wa.me/62895414954962?text=Halo%20saya%20mau%20beli%20${encodeURIComponent(product.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.productBtn}
        aria-label={`Beli ${product.name} via WhatsApp`}
      >
        Beli via WhatsApp
      </a>
    </div>
  </div>
);

export default ProductCard;
