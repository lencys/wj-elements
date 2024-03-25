```tsx
import React from 'react';
import { Item, Label, Icon } from '@elements/react';

function Example() {
  return (
    <>
      <wje-item>
        <wje-label>Default Icon</wje-label>
        <wje-icon name="info-circle" slot="end"></wje-icon>
      </wje-item>

      <wje-item>
        <wje-label>Large Icon</wje-label>
        <wje-icon name="info-circle" size="large" slot="end"></wje-icon>
      </wje-item>

      <wje-item>
        <wje-label>Small Icon</wje-label>
        <wje-icon name="info-circle" size="small" slot="end"></wje-icon>
      </wje-item>

      <wje-item>
        <wje-icon name="star" slot="start"></wje-icon>
        <wje-label>Default Icon</wje-label>
      </wje-item>
    </>
  );
}
export default Example;
```
