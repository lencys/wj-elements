```tsx
import React from 'react';
import { Tooltip, Button } from '@elements/react';

function Example() {
  return (
    <>
      <wje-tooltip content="Som najkrajsi tooltip hore" offset="2">
        <wje-button size="large">Top</wje-button>
      </wje-tooltip>

      <wje-tooltip content="Som najkrajsi tooltip dole" placement="bottom" offset="10">
        <wje-button size="large">Bottom</wje-button>
      </wje-tooltip>

      <wje-tooltip content="Som najkrajsi tooltip vlavo" placement="left" offset="10">
        <wje-button size="large">Left</wje-button>
      </wje-tooltip>

      <wje-tooltip content="Som najkrajsi tooltip vpravo" placement="right" offset="10">
        <wje-button size="large">Right</wje-button>
      </wje-tooltip>
    </>
  );
}
export default Example;
```
