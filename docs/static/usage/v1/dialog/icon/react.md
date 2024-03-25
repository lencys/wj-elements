```tsx
import React from 'react';
import { Avatar, Icon } from '@elements/react';

function Example() {
  return (
    <>
      <wje-avatar size="small">
        <wje-icon name="image" slot="icon"></wje-icon>
      </wje-avatar>
      <wje-avatar>
        <wje-icon name="image" slot="icon"></wje-icon>
      </wje-avatar>
      <wje-avatar size="large">
        <wje-icon name="image" slot="icon"></wje-icon>
      </wje-avatar>
    </>
  );
}
export default Example;
```
