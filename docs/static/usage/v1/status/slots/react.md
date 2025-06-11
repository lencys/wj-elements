```tsx
import React from 'react';
import { Status, Icon } from '@elements/react';

function Example() {
  return (
    <wje-status color="success">
      <span slot="start">Dostupnosť</span>
      <wje-icon name="check" size="2x-small"></wje-icon>
      <span slot="end">K dispozícii</span>
    </wje-status>
  );
}
export default Example;
```
