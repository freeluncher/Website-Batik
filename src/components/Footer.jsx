import React from "react";

const Footer = () => (
  <footer
    style={{
      width: '100%',
      background: 'rgba(245,238,230,0.95)',
      borderTop: '1.5px solid #e5d6b8',
      marginTop: '2.5rem',
      padding: '1.5rem 0 1.2rem 0',
      textAlign: 'center',
      fontFamily: 'Inter, Arial, sans-serif',
      color: '#4e2e0e',
      fontSize: '1rem',
      letterSpacing: '0.01em',
      boxShadow: '0 -2px 16px 0 rgba(191,167,122,0.07)'
    }}
    aria-label="Footer Batik Tosri"
  >
    <div style={{ marginBottom: '0.5rem' }}>
      &copy; {new Date().getFullYear()} <b>Batik Tosri</b> — Heritage Batik Bakaran Wetan, Juwana, Pati, Jawa Tengah
    </div>
    <div style={{ fontSize: '0.95em' }}>
      <a
        href="https://instagram.com/batiktosri"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#bfa77a', textDecoration: 'none', margin: '0 0.7em' }}
        aria-label="Instagram Batik Tosri"
      >
        Instagram
      </a>
      <a
        href="mailto:batiktosri@gmail.com"
        style={{ color: '#bfa77a', textDecoration: 'none', margin: '0 0.7em' }}
        aria-label="Email Batik Tosri"
      >
        Email
      </a>
      <a
        href="https://wa.me/62895414954962"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#bfa77a', textDecoration: 'none', margin: '0 0.7em' }}
        aria-label="WhatsApp Batik Tosri"
      >
        WhatsApp
      </a>
    </div>
    <div style={{ fontSize: '0.85em', marginTop: '0.7em', color: '#a08a6a' }}>
      Website by{' '}
      <a
        href="https://github.com/freeluncher"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#a08a6a', textDecoration: 'underline' }}
      >
        freeluncher
      </a>
    </div>
  </footer>
);

export default Footer;
