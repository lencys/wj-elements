```tsx
import React from 'react';
import { Toggle, Item } from '@elements/react';

function Example() {
  return (
    <>
      <wj-item>
        <wj-toggle checked>Default Toggle</wj-toggle>
      </wj-item>
      <wj-item>
        <wj-toggle color="primary" checked>Primary Toggle</wj-toggle>
      </wj-item>
      <wj-item>
        <wj-toggle color="complete" checked>Complete Toggle</wj-toggle>
      </wj-item>
      <wj-item>
        <wj-toggle color="success" checked>Success Toggle</wj-toggle>
      </wj-item>
      <wj-item>
        <wj-toggle color="warning" checked>Warning Toggle</wj-toggle>
      </wj-item>
      <wj-item>
        <wj-toggle color="danger" checked>Danger Toggle</wj-toggle>
      </wj-item>
      <wj-item>
        <wj-toggle color="dark" checked>Dark Toggle</wj-toggle>
      </wj-item>
    </>
  );
}
export default Example;
```
