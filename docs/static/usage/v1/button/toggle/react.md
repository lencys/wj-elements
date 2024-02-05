```tsx
import React from 'react';
import { Button, Icon } from '@elements/react';
function Example() {
  return (
    <wj-button fill="link" toggle="off">
      <wj-icon name="sun" slot="toggle"></wj-icon>
      <wj-icon name="moon" slot="toggle"></wj-icon>
    </wj-button>
    <wj-button fill="link" toggle="off">
        <span slot="toggle">On</span>
        <span slot="toggle">Off</span>
    </wj-button>
  );
}
export default Example;
```
