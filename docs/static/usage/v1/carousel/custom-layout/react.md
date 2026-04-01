```tsx
import React from 'react';
import { Carousel, CarouselItem } from '@elements/react';

function Example() {
  return (
    <>
      <wje-carousel pagination navigation slide-per-page="1" className="example-single-layout">
        <wje-carousel-item>
          <div className="cards-grid">
            <article className="promo-card">1</article>
            <article className="promo-card">2</article>
            <article className="promo-card">3</article>
            <article className="promo-card">4</article>
            <article className="promo-card">5</article>
          </div>
        </wje-carousel-item>
        <wje-carousel-item>
          <div className="cards-grid">
            <article className="promo-card">6</article>
            <article className="promo-card">7</article>
            <article className="promo-card">8</article>
            <article className="promo-card">9</article>
            <article className="promo-card">10</article>
          </div>
        </wje-carousel-item>
      </wje-carousel>

      <style>{`
        .example-single-layout {
          --wje-carousel-height: 180px;
          --wje-carousel-gap: 1rem;
        }

        .example-single-layout .cards-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1rem;
          height: 100%;
        }

        .example-single-layout .promo-card {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #1b4965, #4f86c6);
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}

export default Example;
```
