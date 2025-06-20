import React from 'react';

const Navbar = () => (
	<nav
		style={{
			width: "100%",
			padding: "1rem",
			background: "#2d1c0b", // coklat tua heritage
			borderBottom: "2px solid #bfa77a", // aksen emas/coklat muda
			position: "sticky",
			top: 0,
			zIndex: 10,
			boxShadow: "0 2px 8px rgba(77, 54, 24, 0.08)",
			display: "flex",
			alignItems: "center",
			gap: "0.75rem",
		}}>
		<img src="/logo-tosri-secondary.svg" alt="Logo Batik Tosri" style={{ height: "36px", width: "36px", objectFit: "contain", background: "transparent" }} />
		<span style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#c0a77a", fontFamily: "Georgia, serif", letterSpacing: "2px" }}>Batik Tosri</span>
	</nav>
);

export default Navbar;
