```tsx
import React from 'react';
import { Slider } from '@elements/react';
function Example() {
  return (
    <>
      <wj-grid>
        <wj-row>
          <wj-col>
            <wj-slider color="primary" value="50"></wj-slider>
          </wj-col>
          <wj-col>
            <wj-slider color="complete" value="50"></wj-slider>
          </wj-col>
          <wj-col>
            <wj-slider color="success" value="50"></wj-slider>
          </wj-col>
          <wj-col>
            <wj-slider color="warning" value="50"></wj-slider>
          </wj-col>
          <wj-col>
            <wj-slider color="danger" value="50"></wj-slider>
          </wj-col>
          <wj-col>
            <wj-slider color="dark" value="50"></wj-slider>
          </wj-col>
          <wj-col>
            <wj-slider color="light" value="50"></wj-slider>
          </wj-col>
        </wj-row>
      </wj-grid>
    </>
  );
}
export default Example;
```
