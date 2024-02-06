```tsx
import React from 'react';
import { FormatDigital, Input } from '@elements/react';

function Example() {
  return (
    <>
      <wj-input type="number" variant="standard" placeholder="Typing number" value="1000000"></wj-input>
      <wj-format-digital value="1000000" class="example"></wj-format-digital>
      <style>
        wj-input {
          width: 200px;
          margin-inline: 0 .5rem;
          --wj-input-margin-bottom: 0;
        }
      </style>
    </>
  );
}
export default Example;
```
