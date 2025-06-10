```tsx
import React from 'react';
import { Status, Icon } from '@elements/react';

function Example() {
  return (
    <wje-status color="success">
      <wje-icon name="check" size="2x-small"></wje-icon>
    </wje-status>
    <wje-status color="success" size="medium">
      <wje-icon name="check" size="x-small"></wje-icon>
    </wje-status>
    <wje-status color="success" size="large">
      <wje-icon name="check" size="medium"></wje-icon>
    </wje-status>
  );
}
export default Example;
```
