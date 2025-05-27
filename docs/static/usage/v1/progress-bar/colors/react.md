```tsx
import React from 'react';
import { ProgressBar } from '@elemets/react';
function Example() {
  return (
    <wje-progress-bar progress="60"></wje-progress-bar>
    <wje-progress-bar progress="60" type="circle" radius="30"></wje-progress-bar>
    <!-- PRIMARY -->
    <wje-progress-bar progress="60" color="primary"></wje-progress-bar>
    <wje-progress-bar progress="60" color="primary" type="circle" radius="30"></wje-progress-bar>
    <!-- SECONDARY -->
    <wje-progress-bar progress="60" color="complete"></wje-progress-bar>
    <wje-progress-bar progress="60" color="complete" type="circle" radius="30"></wje-progress-bar>
    <!-- SUCCESS -->
    <wje-progress-bar progress="60" color="success"></wje-progress-bar>
    <wje-progress-bar progress="60" color="success" type="circle" radius="30"></wje-progress-bar>
    <!-- WARNING -->
    <wje-progress-bar progress="60" color="warning"></wje-progress-bar>
    <wje-progress-bar progress="60" color="warning" type="circle" radius="30"></wje-progress-bar>
    <!-- DANGER -->
    <wje-progress-bar progress="60" color="danger"></wje-progress-bar>
    <wje-progress-bar progress="60" color="danger" type="circle" radius="30"></wje-progress-bar>
    <!-- INFO -->
    <wje-progress-bar progress="60" color="info"></wje-progress-bar>
    <wje-progress-bar progress="60" color="info" type="circle" radius="30"></wje-progress-bar>
  );
}
export default Example;
```
