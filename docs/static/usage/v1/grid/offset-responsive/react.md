```tsx
import React from 'react';
import { Col, Grid, Row } from '@elements/react';

import './main.css';

function Example() {
  return (
    <>
      <span>Žiadny offset pre breakpoint xs, posun 1. stĺpca pre sm a vyššie</span>
      <wje-grid>
        <wje-row>
          <wje-col offset-sm="2">1</wje-col>
          <wje-col>2</wje-col>
          <wje-col>3</wje-col>
          <wje-col>4</wje-col>
          <wje-col>5</wje-col>
        </wje-row>
      </wje-grid>

      <span>Žiadny offset pre breakpoint xs, offset posledných 3 stĺpcov pre md a vyššie</span>
      <wje-grid>
        <wje-row>
          <wje-col>1</wje-col>
          <wje-col offset-md="2">2</wje-col>
          <wje-col offset-md="2">3</wje-col>
          <wje-col offset-md="2">4</wje-col>
        </wje-row>
      </wje-grid>

      <span>Offset všetkých stĺpcov o 6 pre breakpoint xs, offset o 4 pre md, offset o 2 pre lg a vyššie</span>
      <wje-grid>
        <wje-row wrap>
          <wje-col offset="6" offset-md="4" offset-lg="2">1</wje-col>
          <wje-col offset="6" offset-md="4" offset-lg="2">2</wje-col>
        </wje-row>
      </wje-grid>
    </>
  );
}
export default Example;
```
