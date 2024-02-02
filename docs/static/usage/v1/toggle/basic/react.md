```tsx
import React from 'react';
import { Toggle, Item } from '@elements/react';

function Example() {
  return (
    <>
      <wj-item>
          <wj-toggle>Default Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle checked>Checked Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle disabled>Disabled Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle checked disabled>Disabled Checked Toggle</wj-toggle>
        </wj-item>
        <wj-item>
          <wj-toggle color="success" checked disabled>Disabled Checked Toggle</wj-toggle>
        </wj-item>
    </>
  );
}
export default Example;
```
