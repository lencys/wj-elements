```tsx
import React from 'react';
import { FormatDigital, Input } from '@elements/react';

function Example() {
  return (
    <>
       <wj-format-digital value="9900"></wj-format-digital><br/>
        short<wj-format-digital value="9900" unit-display="short"></wj-format-digital><br/>
        narrow<wj-format-digital value="9900" unit-display="narrow"></wj-format-digital><br/>
        long<wj-format-digital value="9900" unit-display="long"></wj-format-digital>
    </>
  );
}
export default Example;
```
