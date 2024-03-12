```tsx
import React from 'react';
import { CopyButton } from '@elements/react';

function Example() {
  return
  <wj-carousel pagination loop navigation class="example-spacing">
    <wj-carousel-item>
      <wj-img src="https://picsum.photos/500/375?i=1"></wj-img>
    </wj-carousel-item>
    <wj-carousel-item>
      <wj-img src="https://picsum.photos/500/375?i=2"></wj-img>
    </wj-carousel-item>
    <wj-carousel-item>
      <wj-img src="https://picsum.photos/500/375?i=3"></wj-img>
    </wj-carousel-item>
    <wj-carousel-item>
      <wj-img src="https://picsum.photos/500/375?i=4"></wj-img>
    </wj-carousel-item>
  </wj-carousel>
  <style>
    .example-spacing {
    --wj-spacing-inline: 3rem;
  }
  </style>;
}
export default Example;
```
