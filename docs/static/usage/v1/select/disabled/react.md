```tsx
import React from 'react';
import { Select, Option } from '@elements/react';
function Example() {
  return (
    <wj-select placeholder="Select option" label="Label" disabled style="margin-bottom: 1rem;">
      <wj-option value="option-1">Option 1</wj-option>
      <wj-option value="option-2" selected>Option 2</wj-option>
      <wj-option value="option-3">Option 3</wj-option>
      <wj-option value="option-4">Option 4</wj-option>
    </wj-select>

    <wj-select placeholder="Select option" variant="standard" disabled>
      <wj-option value="option-1">Option 1</wj-option>
      <wj-option value="option-2" selected>Option 2</wj-option>
      <wj-option value="option-3">Option 3</wj-option>
      <wj-option value="option-4">Option 4</wj-option>
    </wj-select>
  );
}
export default Example;
```
