import React, { useState, useRef } from "react";
import styles from './TestimonialSlider.module.css';

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
    <div className={styles.testimonialSlider}>
      <h2 className={styles.testimonialTitle}>Testimoni Pelanggan</h2>
      <div className={styles.testimonialNav}>
        <button
          aria-label="Sebelumnya"
          onClick={prev}
          disabled={start === 0}
          className={styles.testimonialBtn}
        >&#8592;</button>
        <div
          ref={sliderRef}
          className={styles.testimonialSliderInner}
          style={{ width: cardsPerView === 1 ? 320 : cardsPerView === 2 ? 700 : 1100 }}
        >
          {testimonials.slice(start, start + cardsPerView).map((t, i) => (
            <div className={styles.testimonialCard} key={i}>
              <blockquote className={styles.testimonialBlockquote}>
                "{t.text}"
                <br />
                <span style={{ fontWeight: "bold", color: "#2d1c0b" }}>- {t.name}</span>
              </blockquote>
            </div>
          ))}
        </div>
        <button
          aria-label="Selanjutnya"
          onClick={next}
          disabled={start >= maxStart}
          className={styles.testimonialBtn}
        >&#8594;</button>
      </div>
      <div className={styles.testimonialDots}>
        {Array.from({ length: testimonials.length - cardsPerView + 1 }).map((_, i) => (
          <span
            key={i}
            className={
              i === start
                ? `${styles.testimonialDot} ${styles.testimonialDotActive}`
                : styles.testimonialDot
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
