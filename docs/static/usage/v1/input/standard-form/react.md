```tsx
import React from 'react';
import { Input, Grid, Row, Col } from '@elements/react';

function Example() {
  return (
      <wje-grid>
        <wje-row class="gx-2">
          <wje-col size="6">
            <wje-input variant="standard" label="Project name"></wje-input>
          </wje-col>
          <wje-col size="6">
            <wje-input variant="standard" label="Project code" placeholder="6 digit code" minlength="6" maxlength="6" message="Toto je moja hlaska" validate-on-change custom-error-display></wje-input>
          </wje-col>
        </wje-row>
        <wje-row>
          <wje-col size="12">
            <wje-input variant="standard" label="Project URL">
              <span slot="start"><wje-icon name="globe"></wje-icon></span>
              <span slot="end">.com</span>
            </wje-input>
          </wje-col>
        </wje-row>
        <wje-row class="gx-2">
          <wje-col size="6">
            <wje-input variant="standard" label="Profit">
              <span slot="end">&euro;</span>
            </wje-input>
          </wje-col>
          <wje-col size="6">
            <wje-input variant="standard" label="Email"></wje-input>
          </wje-col>
        </wje-row>
      </wje-grid>
  );
}
export default Example;
```
