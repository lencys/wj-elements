```tsx
import React from 'react';
import { Toggle, Item } from '@elements/react';

function Example() {
  return (
    <>
      <wje-item>
        <wje-toggle checked>Default Toggle</wje-toggle>
      </wje-item>
      <wje-item>
        <wje-toggle color="primary" checked>
          Primary Toggle
        </wje-toggle>
      </wje-item>
      <wje-item>
        <wje-toggle color="complete" checked>
          Complete Toggle
        </wje-toggle>
      </wje-item>
      <wje-item>
        <wje-toggle color="success" checked>
          Success Toggle
        </wje-toggle>
      </wje-item>
      <wje-item>
        <wje-toggle color="warning" checked>
          Warning Toggle
        </wje-toggle>
      </wje-item>
      <wje-item>
        <wje-toggle color="danger" checked>
          Danger Toggle
        </wje-toggle>
      </wje-item>
      <wje-item>
        <wje-toggle color="dark" checked>
          Dark Toggle
        </wje-toggle>
      </wje-item>
    </>
  );
}
export default Example;
```
