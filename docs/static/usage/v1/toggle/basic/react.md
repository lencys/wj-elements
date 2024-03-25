```tsx
import React from 'react';
import { Toggle, Item } from '@elements/react';

function Example() {
  return (
    <>
      <wje-item>
          <wje-toggle>Default Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle checked>Checked Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle disabled>Disabled Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle checked disabled>Disabled Checked Toggle</wje-toggle>
        </wje-item>
        <wje-item>
          <wje-toggle color="success" checked disabled>Disabled Checked Toggle</wje-toggle>
        </wje-item>
    </>
  );
}
export default Example;
```
