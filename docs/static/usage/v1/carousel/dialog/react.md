```tsx
import React from 'react';
import {Button, Dialog, CarouselItem, Image } from '@elements/react';

function Example() {
  return;
    <wje-button dialog="open-modal">Open</wje-button>
    <wje-dialog trigger="open-modal" title="Title" size="large">
      <wje-carousel pagination loop>
        <wje-carousel-item>
          <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
        </wje-carousel-item>
        <wje-carousel-item>
          <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
        </wje-carousel-item>
        <wje-carousel-item>
          <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
        </wje-carousel-item>
        <wje-carousel-item>
          <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
        </wje-carousel-item>
      </wje-carousel>
    </wje-dialog>
}
export default Example;
```
