```tsx
import React from 'react';
import { Breadcrumb, Breadcrumbs } from '@elements/react';
function Example() {
  return (
    <wje-breadcrumbs>
      <wje-breadcrumb href="/home">
        Home
        <wje-icon slot="separator" name="slash"></wje-icon>
      </wje-breadcrumb>
      <wje-breadcrumb href="/electronics">
        Electronics
        <wje-icon slot="separator" name="slash"></wje-icon>
      </wje-breadcrumb>
      <wje-breadcrumb href="/cameras">
        Cameras
        <wje-icon slot="separator" name="slash"></wje-icon>
      </wje-breadcrumb>
      <wje-breadcrumb href="/film">
        Film
        <wje-icon slot="separator" name="slash"></wje-icon>
      </wje-breadcrumb>
    </wje-breadcrumbs>
  );
}
export default Example;
```
