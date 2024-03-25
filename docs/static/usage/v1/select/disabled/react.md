```tsx
import React from 'react';
import { Select, Option } from '@elements/react';
function Example() {
  return (
    <wje-select placeholder="Select option" label="Label" disabled style="margin-bottom: 1rem;">
      <wje-option value="option-1">Option 1</wje-option>
      <wje-option value="option-2" selected>Option 2</wje-option>
      <wje-option value="option-3">Option 3</wje-option>
      <wje-option value="option-4">Option 4</wje-option>
    </wje-select>

    <wje-select placeholder="Select option" variant="standard" disabled>
      <wje-option value="option-1">Option 1</wje-option>
      <wje-option value="option-2" selected>Option 2</wje-option>
      <wje-option value="option-3">Option 3</wje-option>
      <wje-option value="option-4">Option 4</wje-option>
    </wje-select>
  );
}
export default Example;
```
