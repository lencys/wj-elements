```tsx
import React from 'react';
import { Button, ButtonGroup, Dropdown, Menu, MenuItem, VisuallyHidden } from '@elements/react';
function Example() {
  return (
    <wje-button-group>
      <wje-button variant="primary">Save</wje-button>
      <wje-dropdown placement="bottom-end" offset="5">
        <wje-button slot="trigger" variant="primary" caret>
          <wje-visually-hidden>More options</wje-visually-hidden>
        </wje-button>
        <wje-menu variant="context">
          <wje-menu-item>Save</wje-menu-item>
          <wje-menu-item>Save as&hellip;</wje-menu-item>
          <wje-menu-item>Save all</wje-menu-item>
        </wje-menu>
      </wje-dropdown>
    </wje-button-group>
  );
}
export default Example;
```
