```tsx
import React from 'react';
import FormatDigital from '@elements/react';

function Example() {
  return (
    <>
      <wje-format-digital value="900000"><span slot="start">Nahraných: </span></wje-format-digital>
      <wje-format-digital value="9900000"><span slot="start">&nbsp;z </span></wje-format-digital>
    </>
  );
}
export default Example;
```
