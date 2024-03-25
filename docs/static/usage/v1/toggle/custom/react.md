```tsx
import React from 'react';
import { Toggle } from '@elements/react';

function Example() {
  return (
    <>
      <wje-toggle id="custom-toggle" checked>Default Toggle
        <style>
          #custom-toggle {
            --wje-toggle-color-base: #ff0000;
            --wje-toggle-width: 60px;
            --wje-toggle-height: 8px;
            --wje-toggle-border-radius: 0;
            --wje-toggle-handle-width: 20px;
            --wje-toggle-handle-height: 20px;
            --wje-toggle-handle-border-radius: 0;
            --wje-toggle-handle-color: #996633;
            --wje-toggle-handle-shadow: none !important;
            --wje-toggle-handle-shadow-checked: none !important;
          }
        </style>
      </wje-toggle>
    </>
  );
}
export default Example;
```
