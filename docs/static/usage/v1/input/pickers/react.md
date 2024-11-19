```tsx
import React from 'react';
import { Input, IconPicker, ColorPicker } from '@elements/react';

function Example() {
  return (
      <wje-input variant="standard" label="Default input" class="example-icon" clearable>
        <wje-icon-picker slot="start"></wje-icon-picker>
      </wje-input>

      <wje-input variant="standard" label="Default input" class="example-color" clearable>
        <wje-color-picker slot="start"></wje-color-picker>
      </wje-input>
  );
}
export default Example;
```
