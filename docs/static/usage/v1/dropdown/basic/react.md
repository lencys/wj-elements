```tsx
import React from 'react';
import { Dropdown, Button, Menu, MenuItem, Icon, Label } from '@elements/react';

function Example() {
  return (
  <wje-dropdown label="Start" placement="bottom-start" offset="5">
    <wje-button size="large" slot="trigger" stop-propagation="true" caret>Large</wje-button>
    <wje-menu variant="context">
      <wje-menu-item>
        <wje-icon name="plane" slot="start"></wje-icon>
        <wje-label>Menu item</wje-label>
      </wje-menu-item>
      <wje-menu-item>
        <wje-icon name="book" slot="start"></wje-icon>
        <wje-label>Menu item</wje-label>
      </wje-menu-item>
      <wje-menu-item>
        <wje-icon name="music" slot="start"></wje-icon>
        <wje-label>Menu item</wje-label>
      </wje-menu-item>
      <wje-menu-item>
        <wje-icon name="video" slot="start"></wje-icon>
        <wje-label>Menu item</wje-label>
      </wje-menu-item>
    </wje-menu>
  </wje-dropdown>;

  )
}
export default Example;
```
