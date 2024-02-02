```tsx
import React from 'react';
import { Toolbar, ToolbarAction, Breadcrumbs, Breadcrumb, Button } from '@elements/react';

function Example() {
  return (
    <>
      <wj-toolbar>
        <wj-breadcrumbs slot="start">
          <wj-breadcrumb href="/home"><wj-icon slot="start" name="home"></wj-icon></wj-breadcrumb>
          <wj-breadcrumb href="/photography">Photography</wj-breadcrumb>
          <wj-breadcrumb href="/cameras">Cameras</wj-breadcrumb>
          <wj-breadcrumb href="/film">Film</wj-breadcrumb>
          <wj-breadcrumb href="/35mm">35 mm</wj-breadcrumb>
        </wj-breadcrumbs>
        <wj-toolbar-action slot="end">
          <wj-button>Create</wj-button>
          <wj-button>Delete</wj-button>
        </wj-toolbar-action>
      </wj-toolbar>
    </>
  );
}
export default Example;
```
