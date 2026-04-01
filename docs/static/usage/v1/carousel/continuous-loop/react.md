```tsx
import React from 'react';
import { Carousel, CarouselItem } from '@elements/react';

function Example() {
  return (
    <>
      <wje-carousel pagination loop continuous-loop navigation slide-per-page="5" className="example-continuous-loop">
        <wje-carousel-item><article className="demo-tile">1</article></wje-carousel-item>
        <wje-carousel-item><article className="demo-tile">2</article></wje-carousel-item>
        <wje-carousel-item><article className="demo-tile">3</article></wje-carousel-item>
        <wje-carousel-item><article className="demo-tile">4</article></wje-carousel-item>
        <wje-carousel-item><article className="demo-tile">5</article></wje-carousel-item>
        <wje-carousel-item><article className="demo-tile">6</article></wje-carousel-item>
        <wje-carousel-item><article className="demo-tile">7</article></wje-carousel-item>
        <wje-carousel-item><article className="demo-tile">8</article></wje-carousel-item>
        <wje-carousel-item><article className="demo-tile">9</article></wje-carousel-item>
        <wje-carousel-item><article className="demo-tile">10</article></wje-carousel-item>
      </wje-carousel>

      <style>{`
        .example-continuous-loop {
          --wje-carousel-height: 180px;
          --wje-carousel-gap: 1rem;
        }

        .example-continuous-loop .demo-tile {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #7b2cbf, #3a86ff);
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
