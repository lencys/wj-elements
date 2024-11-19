```tsx
import React from 'react';
import { Toolbar, ToolbarAction, Breadcrumbs, Breadcrumb, Button } from '@elements/react';

function Example() {
  return (
    <>
      <wje-toolbar>
        <wje-breadcrumbs slot="start">
          <wje-breadcrumb href="/home">
            <wje-icon slot="start" name="home"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb href="/photography">Photography</wje-breadcrumb>
          <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
          <wje-breadcrumb href="/film">Film</wje-breadcrumb>
          <wje-breadcrumb href="/35mm">35 mm</wje-breadcrumb>
        </wje-breadcrumbs>
        <wje-toolbar-action slot="end">
          <wje-button>Create</wje-button>
          <wje-button>Delete</wje-button>
        </wje-toolbar-action>
      </wje-toolbar>
    </>
  );
}
export default Example;
```
