```tsx
import React from 'react';
import { Select, Option, Icon } from '@elements/react';
function Example() {
  return (
    <wj-select label="Label test" placeholder="Select option" variant="standard">
      <wj-option value="option-1">Option 1</wj-option>
      <wj-option value="option-2">
        Option 2
        <wj-icon name="heart" slot="end"></wj-icon>
      </wj-option>
      <wj-option value="option-3" selected>Option 3</wj-option>
      <wj-option value="option-4">Option 4</wj-option>
    </wj-select>
  );
}
export default Example;
```
