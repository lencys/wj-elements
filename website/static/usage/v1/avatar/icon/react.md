```tsx
import React from 'react';
import { Avatar, Icon } from '@elements/react';

function Example() {
  return (
    <>
      <wj-avatar size="small">
        <wj-icon name="photo" slot="icon"></wj-icon>
      </wj-avatar>
      <wj-avatar>
        <wj-icon name="photo" slot="icon"></wj-icon>
      </wj-avatar>
      <wj-avatar size="large">
        <wj-icon name="photo" slot="icon"></wj-icon>
      </wj-avatar>
    </>
  );
}
export default Example;
```
