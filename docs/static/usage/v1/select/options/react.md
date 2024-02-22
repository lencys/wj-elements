```tsx
import React from 'react';
import { Select, Options } from '@elements/react';
function Example() {
  return (
  <wj-select placeholder="Select options" max-options="1" max-height="200px" multiple clearable>
    <wj-options url="/api/options" item-value="value" item-text="label"></wj-options>
  </wj-select>
  );
}
export default Example;
```
