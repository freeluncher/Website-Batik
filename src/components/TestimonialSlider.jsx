import React, { useState, useRef } from "react";

const testimonials = [
  {
    text: "Batik Tosri benar-benar beda, motifnya unik dan kualitasnya premium! Saya bangga memakai karya asli Bakaran Wetan.",
    name: "Sari, Surabaya"
  },
  {
    text: "Motif heritage-nya sangat indah dan detail. Pelayanan ramah dan pengiriman cepat!",
    name: "Dewi, Semarang"
  },
  {
    text: "Bahan batiknya adem dan nyaman dipakai. Sangat recommended untuk koleksi batik eksklusif!",
    name: "Rina, Jakarta"
  },
  {
    text: "Setiap helai batik terasa istimewa, hasil karya pengrajin yang sangat berpengalaman.",
    name: "Budi, Bandung"
  },
  {
    text: "Order mudah, hasilnya memuaskan. Batik Tosri selalu jadi pilihan keluarga kami.",
    name: "Andi, Yogyakarta"
  }
];

const getCardsPerView = () => {
  if (window.innerWidth >= 1200) return 3;
  if (window.innerWidth >= 700) return 2;
  return 1;
};

const TestimonialSlider = () => {
  const [start, setStart] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const sliderRef = useRef(null);

  React.useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxStart = Math.max(0, testimonials.length - cardsPerView);
  const next = () => setStart(s => Math.min(s + 1, maxStart));
  const prev = () => setStart(s => Math.max(s - 1, 0));

  return (
    <div style={{ width: '100vw', maxWidth: '100vw', position: 'relative', margin: '2.5rem 0', padding: 0 }}>
      <h2 style={{ fontFamily: "Playfair Display, serif", color: "#2d1c0b", fontSize: "1.1rem", marginBottom: "1.2rem", textAlign: 'center' }}>Testimoni Pelanggan</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
        <button aria-label="Sebelumnya" onClick={prev} disabled={start === 0} style={{ background: 'none', border: 'none', cursor: start === 0 ? 'not-allowed' : 'pointer', fontSize: 28, color: start === 0 ? '#e0d3b8' : '#bfa77a', padding: 4 }}>&#8592;</button>
        <div
          ref={sliderRef}
          style={{
            display: 'flex',
            gap: 24,
            overflow: 'visible', // ubah dari 'hidden' ke 'visible'
            width: cardsPerView === 1 ? 320 : cardsPerView === 2 ? 700 : 1100,
            transition: 'width 0.3s',
            justifyContent: 'center',
          }}
        >
          {testimonials.slice(start, start + cardsPerView).map((t, i) => (
            <div className="card-heritage" key={i} style={{ minWidth: 320, maxWidth: 420, flex: 1, margin: 0 }}>
              <blockquote style={{ fontStyle: "italic", color: "#4e2e0e", margin: 0, minHeight: 70, textAlign: 'left' }}>
                "{t.text}"
                <br />
                <span style={{ fontWeight: "bold", color: "#2d1c0b" }}>- {t.name}</span>
              </blockquote>
            </div>
          ))}
        </div>
        <button aria-label="Selanjutnya" onClick={next} disabled={start >= maxStart} style={{ background: 'none', border: 'none', cursor: start >= maxStart ? 'not-allowed' : 'pointer', fontSize: 28, color: start >= maxStart ? '#e0d3b8' : '#bfa77a', padding: 4 }}>&#8594;</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 10 }}>
        {Array.from({ length: testimonials.length - cardsPerView + 1 }).map((_, i) => (
          <span key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i === start ? '#bfa77a' : '#e0d3b8', display: 'inline-block' }} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
