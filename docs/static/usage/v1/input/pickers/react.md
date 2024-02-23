```tsx
import React from 'react';
import { Input, IconPicker, ColorPicker } from '@elements/react';

function Example() {
  return (
      <wj-input variant="standard" label="Default input" class="example-icon" clearable>
        <wj-icon-picker slot="start"></wj-icon-picker>
      </wj-input>
      
      <wj-input variant="standard" label="Default input" class="example-color" clearable>
        <wj-color-picker slot="start"></wj-color-picker>
      </wj-input>
  );
}
export default Example;
```
