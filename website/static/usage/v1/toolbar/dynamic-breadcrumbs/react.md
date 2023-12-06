```tsx
import React from 'react';
import { Toolbar, ToolbarAction, Breadcrumbs, Breadcrumb, Button, Icon } from '@elements/react';

function Example() {
  return (
    <>
      <wj-toolbar>
        <wj-breadcrumbs slot="start" max-items="3" items-before-collapse="1" routerlinks>
          <wj-breadcrumb route="">
            <wj-icon slot="start" name="home"></wj-icon>
            <wj-icon slot="separator" name="minus" size="small" class="custom"></wj-icon>
          </wj-breadcrumb>
          ${this.breadcrumbs.map((breadcrumb) => {
            return `<wj-breadcrumb route="${breadcrumb.name}">
              ${breadcrumb.text}
              <wj-icon slot="separator" name="minus" size="small" class="custom"></wj-icon>
            </wj-breadcrumb>`;
          }).join("")}
          <style>
            .custom {
              --wj-icon-size: 10px;
            }
          </style>     
        </wj-breadcrumbs>
        <wj-toolbar-action slot="end">
          <wj-button>Create</wj-button>
          <wj-button>Read</wj-button>
          <wj-button>Update</wj-button>
          <wj-button>Delete</wj-button>
        </wj-toolbar-action>
      </wj-toolbar>
    </>
  );
}
export default Example;
```
