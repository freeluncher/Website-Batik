import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  React.useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <img src="/logo-tosri-secondary.svg" alt="Logo Batik Tosri" className={styles.navbarLogo} width="40" height="40" decoding="async" />
        <span className={styles.navbarTitle} tabIndex="0">Batik Tosri</span>
      </div>
      {/* Hamburger button */}
      <button
        aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={open}
        aria-controls="navbar-links"
        onClick={() => setOpen(!open)}
        className={styles.hamburger}
      >
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
      </button>
      {/* Menu links */}
      <div
        id="navbar-links"
        className={
          open
            ? `${styles.navbarLinks} ${styles.navbarLinksOpen}`
            : styles.navbarLinks
        }
        role="navigation"
        aria-label="Navigasi utama"
      >
        <Link
          to="/"
          className={
            location.pathname === '/'
              ? `${styles.navbarLink} ${styles.navbarLinkActive}`
              : styles.navbarLink
          }
        >
          Beranda
        </Link>
        <Link
          to="/katalog"
          className={
            location.pathname === '/katalog'
              ? `${styles.navbarLink} ${styles.navbarLinkActive}`
              : styles.navbarLink
          }
        >
          Katalog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
