import React, { useState } from "react";
import styles from "./TestSliderTest.module.css";

const cards = [
  { text: "Card 1", color: "#bfa77a" },
  { text: "Card 2", color: "#e0d3b8" },
  { text: "Card 3", color: "#f5eee6" },
  { text: "Card 4", color: "#2d1c0b", textColor: "#fff" },
];

const TestSliderTest = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex(i => (i + 1) % cards.length);
  const prev = () => setIndex(i => (i - 1 + cards.length) % cards.length);

  return (
    <div className={styles.sliderTestContainer}>
      <button onClick={prev} className={styles.sliderTestBtn}>&#8592;</button>
      <div className={styles.sliderTestViewport}>
        <div
          className={styles.sliderTestInner}
          style={{ transform: `translateX(-${index * 320}px)` }}
        >
          {cards.map((card, i) => (
            <div
              className={styles.sliderTestCard}
              key={i}
              style={{ background: card.color, color: card.textColor || "#2d1c0b" }}
            >
              {card.text}
            </div>
          ))}
        </div>
      </div>
      <button onClick={next} className={styles.sliderTestBtn}>&#8594;</button>
    </div>
  );
};

export default TestSliderTest;
