```tsx
import React from 'react';

function Example() {
  return (
    <>
      <wje-breadcrumbs class="breadcrumbs-primary">
        <wje-breadcrumb href="/home">Home</wje-breadcrumb>
        <wje-breadcrumb href="/electronics">Electronics</wje-breadcrumb>
        <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
        <wje-breadcrumb href="/film">Film</wje-breadcrumb>
      </wje-breadcrumbs>

      <wje-breadcrumbs class="breadcrumbs-danger">
        <wje-breadcrumb href="/home">Home</wje-breadcrumb>
        <wje-breadcrumb href="/electronics">Electronics</wje-breadcrumb>
        <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
        <wje-breadcrumb href="/film">Film</wje-breadcrumb>
      </wje-breadcrumbs>

      <style>{`
        .breadcrumbs-primary wje-breadcrumb {
          --wje-breadcrumb-a: var(--wje-color-primary-9);
          --wje-breadcrumb-a-hover: var(--wje-color-primary-7);
        }

        .breadcrumbs-danger wje-breadcrumb {
          --wje-breadcrumb-a: var(--wje-color-danger-9);
          --wje-breadcrumb-a-hover: var(--wje-color-danger-7);
        }
      `}</style>
    </>
  );
}

export default Example;
```
