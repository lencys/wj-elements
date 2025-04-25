```tsx
import React from 'react';
import { Dropdown, Avatar, Menu, Tooltip, Divider, MenuItem } from '@elements/react';
function Example() {
  return (
    <>
    <wje-dropdown id="custom-dropdown" placement="right-start" offset="5" collapsible>
      <wje-avatar label="Petr Rahman" initials slot="trigger"></wje-avatar>
      <wje-menu class="custom-menu" active>
        <div style="display: flex; align-items: center;">
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <h5 style="margin: 0 0 0 .5rem; line-height: normal;">Petr Rahman</h5>
        </div>
        <wje-divider style="--wje-divider-spacing: .5rem"></wje-divider>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
        <wje-divider></wje-divider>
        <wje-menu-item>Link A</wje-menu-item>
        <wje-menu-item>Link B</wje-menu-item>
      </wje-menu>
    </wje-dropdown>
    </>
  );
}
export default Example;
```