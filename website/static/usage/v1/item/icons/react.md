```tsx
import React from 'react';
import { Item, Label, Icon } from '@elements/react';

function Example() {
  return (
    <>
      <wj-item>
        <wj-label>Default Icon</wj-label>
        <wj-icon name="info-circle" slot="end"></wj-icon>
      </wj-item>

      <wj-item>
        <wj-label>Large Icon</wj-label>
        <wj-icon name="info-circle" size="large" slot="end"></wj-icon>
      </wj-item>

      <wj-item>
        <wj-label>Small Icon</wj-label>
        <wj-icon name="info-circle" size="small" slot="end"></wj-icon>
      </wj-item>

      <wj-item>
        <wj-icon name="star" slot="start"></wj-icon>
        <wj-label>Default Icon</wj-label>
      </wj-item>
    </>
  );
}
export default Example;
```
