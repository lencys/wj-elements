```tsx
import React from 'react';
import { Chip } from '@elements/react';
function Example() {
  return (
    <>
        <wje-chip>Default</wje-chip>
        <wje-chip color="primary">Primary</wje-chip>
        <wje-chip color="complete">Complete</wje-chip>
        <wje-chip color="success">Success</wje-chip>
        <wje-chip color="warning">Warning</wje-chip>
        <wje-chip color="danger">Danger</wje-chip>
        <wje-chip color="info">Info</wje-chip>
        <wje-chip color="menu">Menu</wje-chip>
        <wje-chip color="primary" removable>Remove Chip</wje-chip>
        <wje-chip color="complete" removable>Remove Chip</wje-chip>
        <wje-chip color="success" removable>Remove Chip</wje-chip>
        <wje-chip color="warning" removable>Remove Chip</wje-chip>
        <wje-chip color="danger" removable>Remove Chip</wje-chip>
        <wje-chip color="info" removable>Remove Chip</wje-chip>
        <wje-chip color="default" removable>Remove Chip</wje-chip>
    </>
  );
}
export default Example;
```
