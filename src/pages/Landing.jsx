import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Landing = () => {
	const katalogRef = useRef(null);

	const scrollToKatalog = (e) => {
		e.preventDefault();
		if (katalogRef.current) {
			katalogRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div style={{ minHeight: "100vh" }}>
			<Navbar />
			<main
				style={{
					maxWidth: "600px",
					margin: "0 auto",
					padding: "2rem 1rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
				}}>
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
					<img src="/logo-tosri.svg" alt="Logo Batik Tosri" style={{ width: "80px", marginRight: "0.5rem", display: "inline-block", verticalAlign: "middle", filter: "drop-shadow(0 2px 8px #bfa77a)" }} />
					<h1 style={{ display: "inline-block", verticalAlign: "middle", fontFamily: "Playfair Display, serif", color: "#2d1c0b", fontSize: "2rem", margin: 0, letterSpacing: "2px" }}>Batik Tosri</h1>
				</div>
				<p style={{ fontSize: "1.1rem", color: "#4e2e0e", marginBottom: "1.5rem", fontFamily: "Inter, Arial, sans-serif" }}>
					Batik premium buatan tangan pengrajin berpengalaman lebih dari 50 tahun di <b>Desa Bakaran Wetan, Juwana, Pati, Jawa Tengah</b>. Setiap helai batik adalah karya seni yang mengedepankan kualitas, tradisi, dan keindahan warisan budaya Indonesia.
				</p>
				<Link to="/katalog" className="btn-heritage" style={{ marginBottom: "2rem", textDecoration: "none", display: "inline-block" }}>
					Lihat Katalog
				</Link>
				<div className="card-heritage">
					<h2 style={{ fontFamily: "Playfair Display, serif", color: "#2d1c0b", fontSize: "1.5rem", marginBottom: "1rem" }}>Kenapa Pilih Batik Tosri?</h2>
					<ul style={{ textAlign: "left", color: "#2d1c0b", fontFamily: "Inter, Arial, sans-serif", fontSize: "1rem", margin: 0 }}>
						<li>Kualitas premium, detail halus dan tahan lama</li>
						<li>100% buatan tangan oleh pengrajin berpengalaman {">"}50 tahun</li>
						<li>Motif heritage khas Bakaran Wetan, penuh makna budaya</li>
						<li>Bahan pilihan, nyaman dipakai dan eksklusif</li>
						<li>Proses tradisional, menjaga keaslian dan nilai seni</li>
						<li>Order mudah & cepat via WhatsApp</li>
					</ul>
				</div>
				<div className="card-heritage">
					<h2 style={{ fontFamily: "Playfair Display, serif", color: "#2d1c0b", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Testimoni Pelanggan</h2>
					<blockquote style={{ fontStyle: "italic", color: "#4e2e0e", margin: 0 }}>
						"Batik Tosri benar-benar beda, motifnya unik dan kualitasnya premium! Saya bangga memakai karya asli Bakaran Wetan."
						<br />
						<span style={{ fontWeight: "bold", color: "#2d1c0b" }}>- Sari, Surabaya</span>
					</blockquote>
				</div>
				<a
					href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20Batik%20Tosri%20premium%20Bakaran%20Wetan"
					className="btn-heritage"
					style={{ marginTop: "2.5rem", textDecoration: "none", display: "inline-block" }}
					target="_blank"
					rel="noopener noreferrer">
					Konsultasi & Order via WhatsApp
				</a>
				<div style={{ marginTop: "2.5rem", color: "#4e2e0e", fontSize: "0.95rem", fontFamily: "Inter, Arial, sans-serif" }}>
					<b>Lokasi Pengrajin:</b>
					<br />
					Desa Bakaran Wetan, Kecamatan Juwana, Kabupaten Pati, Jawa Tengah, Indonesia
				</div>
			</main>
		</div>
	);
};

export default Landing;