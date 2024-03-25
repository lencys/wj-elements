```tsx
import React from 'react';
import { Col, Grid, Row } from '@elements/react';

import './main.css';

function Example() {
  return (
    <>
    <span>Columns aligned at the start</span>
    <wje-grid>
      <wje-row class="wje-justify-content-start">
        <wje-col size="3"> 1 </wje-col>
        <wje-col size="3"> 2 </wje-col>
      </wje-row>
    </wje-grid>
    
    <span>Stĺpce zarovnané na stred</span>
    <wje-grid>
      <wje-row class="wje-justify-content-center">
        <wje-col size="3"> 1 </wje-col>
        <wje-col size="3"> 2 </wje-col>
      </wje-row>
    </wje-grid>
    
    <span>Stĺpce zarovnané na koniec</span>
    <wje-grid>
      <wje-row class="wje-justify-content-end">
        <wje-col size="3"> 1 </wje-col>
        <wje-col size="3"> 2 </wje-col>
      </wje-row>
    </wje-grid>
    
    <span>Stĺpce zarovnané so space-around</span>
    <wje-grid>
      <wje-row class="wje-justify-content-around">
        <wje-col size="3"> 1 </wje-col>
        <wje-col size="3"> 2 </wje-col>
      </wje-row>
    </wje-grid>
    
    <span>Stĺpce zarovnané so space-between</span>
    <wje-grid>
      <wje-row class="wje-justify-content-between">
        <wje-col size="3"> 1 </wje-col>
        <wje-col size="3"> 2 </wje-col>
      </wje-row>
    </wje-grid>
    </>
  );
}
export default Example;
```
