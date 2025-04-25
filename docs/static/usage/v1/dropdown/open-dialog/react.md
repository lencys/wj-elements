```tsx
import React from 'react';
import { Dropdown, Dialog, Menu, MenuItem, Label, Button, Icon } from '@elements/react';
function Example() {
  return (
    <>
    <wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible>
      <wje-button size="large" slot="trigger" stop-propagation="true" caret>Large</wje-button>
      <wje-menu variant="context">
        <wje-menu-item dialog="open-modal">
          <wje-icon name="book" slot="start"></wje-icon>
          <wje-label>Open dialog</wje-label>
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
    </wje-dropdown>
    
    <wje-dialog trigger="open-modal" headline="Title">
      <h4>Lorem ipsum dolor sit amet</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
      <div slot="footer">
        <wje-button class="close">Zatvoriť</wje-button>
        <wje-button id="save" color="primary">Potvrdiť</wje-button>
      </div>
    </wje-dialog>
    </>
  );
}
export default Example;
```