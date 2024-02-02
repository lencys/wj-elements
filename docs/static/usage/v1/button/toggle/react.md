```tsx
import React from 'react';
import { Button, Icon } from '@elements/react';
function Example() {
  return (
    <wj-button fill="link" toggle="off">
      <wj-icon name="sun" slot="toggle" state="on" size="large"></wj-icon>
      <wj-icon name="moon" slot="toggle" state="off" size="large"></wj-icon>
    </wj-button>
  );
}
export default Example;
```
