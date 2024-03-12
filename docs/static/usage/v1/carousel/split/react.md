```tsx
import React from 'react';
import { CopyButton } from '@elements/react';

function Example() {
  return
  <wj-carousel pagination class="example-content">
    <wj-carousel-item>
      <div>A</div>
      <div>B</div>
    </wj-carousel-item>
    <wj-carousel-item>
      <div>C</div>
      <div>D</div>
    </wj-carousel-item>
    <wj-carousel-item>
      <div>E</div>
      <div>F</div>
    </wj-carousel-item>
    <wj-carousel-item>
      <div>G</div>
      <div>H</div>
    </wj-carousel-item>
  </wj-carousel>
  <style>
    .example-content {
    --wj-carousel-width: 400px;
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
