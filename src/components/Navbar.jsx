import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  React.useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem",
        background: "#2d1c0b",
        borderBottom: "2px solid #bfa77a",
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: "0 2px 8px rgba(77, 54, 24, 0.08)",
        display: "flex",
        alignItems: "center",
        gap: "0.35rem",
        justifyContent: "space-between"
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="/logo-tosri-secondary.svg" alt="Logo Batik Tosri" style={{ height: "36px", width: "36px", objectFit: "contain", background: "transparent" }} />
        <span style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#c0a77a", fontFamily: "Georgia, serif", letterSpacing: "2px" }}>Batik Tosri</span>
      </div>
      {/* Hamburger button */}
      <button
        aria-label="Menu"
        onClick={() => setOpen(!open)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          marginLeft: '1rem',
          marginRight: '18px', // Tambahkan jarak ke kanan
        }}
        className="navbar-hamburger"
      >
        <span style={{
          display: 'block',
          width: 28,
          height: 3,
          background: '#bfa77a',
          margin: '6px 0',
          borderRadius: 2,
          transition: '0.3s',
        }} />
        <span style={{
          display: 'block',
          width: 28,
          height: 3,
          background: '#bfa77a',
          margin: '6px 0',
          borderRadius: 2,
          transition: '0.3s',
        }} />
        <span style={{
          display: 'block',
          width: 28,
          height: 3,
          background: '#bfa77a',
          margin: '6px 0',
          borderRadius: 2,
          transition: '0.3s',
        }} />
      </button>
      {/* Menu links */}
      <div
        className={`navbar-links${open ? ' open' : ''}`}
        style={{
          display: 'flex',
          gap: '1.2rem',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{
          color: location.pathname === '/' ? '#bfa77a' : '#fffbe6',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: '1.05rem',
          letterSpacing: '1px',
          borderBottom: location.pathname === '/' ? '2px solid #bfa77a' : '2px solid transparent',
          paddingBottom: '2px',
          transition: 'color 0.2s, border-bottom 0.2s'
        }}>Beranda</Link>
        <Link to="/katalog" style={{
          color: location.pathname === '/katalog' ? '#bfa77a' : '#fffbe6',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: '1.05rem',
          letterSpacing: '1px',
          borderBottom: location.pathname === '/katalog' ? '2px solid #bfa77a' : '2px solid transparent',
          paddingBottom: '2px',
          transition: 'color 0.2s, border-bottom 0.2s'
        }}>Katalog</Link>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .navbar-links {
            display: none !important;
            position: absolute;
            top: 64px;
            right: 0;
            background: #2d1c0b;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(77,54,24,0.18);
            flex-direction: column;
            gap: 0;
            min-width: 140px;
            max-width: 90vw;
            padding: 0.7rem 0.5rem;
            z-index: 100;
          }
          .navbar-links.open {
            display: flex !important;
          }
          .navbar-hamburger {
            display: block !important;
            margin-right: 18px !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
