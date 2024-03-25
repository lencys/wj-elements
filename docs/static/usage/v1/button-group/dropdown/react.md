```tsx
import React from 'react';
import { Button, ButtonGroup, Dropdown, Menu, MenuItem } from '@elements/react';
function Example() {
  return (
    <wje-button-group label="Example Button Group">
      <wje-button>Button</wje-button>
      <wje-button>Button</wje-button>
      <wje-dropdown placement="bottom-end" offset="5">
        <wje-button slot="trigger" caret>Dropdown</wje-button>
        <wje-menu variant="context">
          <wje-menu-item>Item 1</wje-menu-item>
          <wje-menu-item>Item 2</wje-menu-item>
          <wje-menu-item>Item 3</wje-menu-item>
        </wje-menu>
      </wje-dropdown>
    </wje-button-group>
  );
}
export default Example;
```
