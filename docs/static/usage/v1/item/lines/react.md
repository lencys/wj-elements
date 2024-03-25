```tsx
import React from 'react';
import { Item, Label } from '@elements/react';

function Example() {
  return (
    <>
      <wje-item>
        <wje-label>Default Item Lines </wje-label>
      </wje-item>

      <wje-item lines="inset">
        <wje-label>Item Lines Inset</wje-label>
      </wje-item>

      <wje-item lines="full">
        <wje-label>Item Lines Full</wje-label>
      </wje-item>

      <wje-item lines="none">
        <wje-label>Item Lines None</wje-label>
      </wje-item>

      <wje-item>
        <wje-icon name="star" slot="start"></wje-icon>
        <wje-label>Default Item Lines</wje-label>
        <wje-icon name="info-circle" slot="end"></wje-icon>
      </wje-item>

      <wje-item lines="inset">
        <wje-icon name="star" slot="start"></wje-icon>
        <wje-label>Item Lines Inset</wje-label>
        <wje-icon name="info-circle" slot="end"></wje-icon>
      </wje-item>

      <wje-item lines="full">
        <wje-icon name="star" slot="start"></wje-icon>
        <wje-label>Item Lines Full</wje-label>
        <wje-icon name="info-circle" slot="end"></wje-icon>
      </wje-item>

      <wje-item lines="none">
        <wje-icon name="star" slot="start"></wje-icon>
        <wje-label>Item Lines None</wje-label>
        <wje-icon name="info-circle" slot="end"></wje-icon>
      </wje-item>
    </>
  );
}
export default Example;
```
