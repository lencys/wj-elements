```tsx
import React from 'react';
import { Button, Icon } from '@elements/react';
function Example() {
  return (
    <wje-button fill="link" toggle="off">
      <wje-icon name="sun" slot="toggle"></wje-icon>
      <wje-icon name="moon" slot="toggle"></wje-icon>
    </wje-button>
    <wje-button fill="link" toggle="off">
        <span slot="toggle">On</span>
        <span slot="toggle">Off</span>
    </wje-button>
  );
}
export default Example;
```
