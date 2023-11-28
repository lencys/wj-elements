```tsx
import React from 'react';
import { Button, ButtonGroup, Dropdown, Menu, MenuItem } from '@elements/react';
function Example() {
  return (
    <wj-button-group label="Example Button Group">
      <wj-button>Button</wj-button>
      <wj-button>Button</wj-button>
      <wj-dropdown placement="bottom-end" offset="5">
        <wj-button slot="trigger" caret>Dropdown</wj-button>
        <wj-menu variant="context">
          <wj-menu-item>Item 1</wj-menu-item>
          <wj-menu-item>Item 2</wj-menu-item>
          <wj-menu-item>Item 3</wj-menu-item>
        </wj-menu>
      </wj-dropdown>
    </wj-button-group>
  );
}
export default Example;
```
