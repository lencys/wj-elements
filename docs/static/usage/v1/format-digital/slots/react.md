```tsx
import React from 'react';
import FormatDigital from '@elements/react';

function Example() {
  return (
    <>
      <wj-format-digital value="900000"><span slot="start">Nahraných: </span></wj-format-digital>
      <wj-format-digital value="9900000"><span slot="start">&nbsp;z </span></wj-format-digital>
    </>
  );
}
export default Example;
```
