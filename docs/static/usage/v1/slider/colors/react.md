```tsx
import React from 'react';
import { Slider } from '@elements/react';
function Example() {
  return (
    <>
      <wje-grid>
        <wje-row>
          <wje-col>
            <wje-slider color="primary" value="50"></wje-slider>
          </wje-col>
          <wje-col>
            <wje-slider color="complete" value="50"></wje-slider>
          </wje-col>
          <wje-col>
            <wje-slider color="success" value="50"></wje-slider>
          </wje-col>
          <wje-col>
            <wje-slider color="warning" value="50"></wje-slider>
          </wje-col>
          <wje-col>
            <wje-slider color="danger" value="50"></wje-slider>
          </wje-col>
          <wje-col>
            <wje-slider color="dark" value="50"></wje-slider>
          </wje-col>
          <wje-col>
            <wje-slider color="light" value="50"></wje-slider>
          </wje-col>
        </wje-row>
      </wje-grid>
    </>
  );
}
export default Example;
```
