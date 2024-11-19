```tsx
import React from 'react';
import { Select, Options } from '@elements/react';
function Example() {
  return (
    <wje-select placeholder="Select options" max-options="1" max-height="200px" multiple clearable>
      <wje-options url="/api/options" item-value="value" item-text="label"></wje-options>
    </wje-select>
  );
}
export default Example;
```
