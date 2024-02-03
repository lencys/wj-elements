```tsx
import React from 'react';
import { Slider } from '@elements/react';
function Example() {
  return (
    <>
      <wj-slider class="example" min="20" max="80" value="50" bubble>
        <wj-icon name="volume-3" size="large" slot="start"></wj-icon>
        <wj-icon name="volume" size="large" slot="end"></wj-icon>
        <style>
            .example wj-icon {
                --wj-icon-size: 24px;
            }
        </style>
      </wj-slider>
    </>
  );
}
export default Example;
```
