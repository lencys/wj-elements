```tsx
import React from 'react';
import { Checkbox } from '@elements/react';

function Example() {
  return (
  <wj-checkbox variant="circle">Circle</wj-checkbox>
  <wj-checkbox variant="circle" checked>Circle checked</wj-checkbox>
  <wj-checkbox variant="circle" disabled>Circle disabled</wj-checkbox>
  <wj-checkbox variant="circle" checked disabled>Circle checked disabled</wj-checkbox>
  <wj-checkbox variant="circle" color="complete" checked>Circle complete checked</wj-checkbox>
  <wj-checkbox variant="circle" color="danger" indeterminate>Circle danger indeterminate</wj-checkbox>;
  )
}
export default Example;
```
