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
        <img src="/logo-tosri-secondary.svg" alt="Logo Batik Tosri" className={styles.navbarLogo} />
        <span className={styles.navbarTitle}>Batik Tosri</span>
      </div>
      {/* Hamburger button */}
      <button
        aria-label="Menu"
        onClick={() => setOpen(!open)}
        className={styles.hamburger}
      >
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
      </button>
      {/* Menu links */}
      <div
        className={
          open
            ? `${styles.navbarLinks} ${styles.navbarLinksOpen}`
            : styles.navbarLinks
        }
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
