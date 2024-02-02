```tsx
import React from 'react';
import { Select, Option } from '@elements/react';

function Example() {
  return (
    <wj-select placeholder="Select options" variant="standard" max-options="1" variant="standard" max-height="200px" multiple clearable>
      <wj-options url="/api/options" item-value="tralala" item-text="label"></wj-options>
    </wj-select>
  );
}
export default Example;
```
