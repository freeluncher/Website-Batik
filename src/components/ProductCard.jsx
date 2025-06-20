import React from 'react';
import styles from './ProductCard.module.css';

const getWebpPath = (image) => {
  if (!image) return '';
  // Ubah path jpg hasil resize ke webp hasil resize
  const match = image.match(/\/webp-resize\/([\w-]+)\.jpg$/i);
  if (match) return `/webp-resize/${match[1]}.webp`;
  return image;
};

const ProductCard = ({ product, eager }) => {
  // JSON-LD schema.org Product
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": window.location.origin + product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Batik Tosri"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className={styles.productCard}>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <picture>
        <source srcSet={getWebpPath(product.image)} type="image/webp" />
        <img
          src={product.image}
          alt={product.name + ' - Batik Tosri'}
          className={styles.productImage}
          loading={eager ? "eager" : "lazy"}
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
};

export default ProductCard;
