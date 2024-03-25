```tsx
import React from 'react';
import { CopyButton } from '@elements/react';

function Example() {
  return
  <wje-carousel pagination class="example-content">
    <wje-carousel-item>
      <div>A</div>
      <div>B</div>
    </wje-carousel-item>
    <wje-carousel-item>
      <div>C</div>
      <div>D</div>
    </wje-carousel-item>
    <wje-carousel-item>
      <div>E</div>
      <div>F</div>
    </wje-carousel-item>
    <wje-carousel-item>
      <div>G</div>
      <div>H</div>
    </wje-carousel-item>
  </wje-carousel>
  <style>
    .example-content {
    --wje-carousel-width: 400px;
  }

    .example-content div {
    width: 200px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

    .example-content div:first-child {
    background-color: #f00;
  }

    .example-content div:last-child {
    background-color: #00f;
  }
  </style>;
}
export default Example;
```
