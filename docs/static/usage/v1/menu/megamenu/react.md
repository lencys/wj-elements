```tsx
import React from 'react';
import { Menu, MenuItem, Divider, Icon } from '@elements/react';
function Example() {
  return (
    <>
      <wje-menu id="custom-2" variant="megamenu" active>
          <wje-menu-item>
            <span>Home</span>
            <wje-icon slot="start" name="home"></wje-icon>
          </wje-menu-item>
          <wje-menu-item offset="5" variant="context" manual>
            <span>One</span>
            <wje-icon slot="start" name="heart"></wje-icon>
            <wje-menu slot="submenu" offset="5" placement="bottom-start">
              <wje-menu-item>Menu item 1</wje-menu-item>
              <wje-menu-item variant="context">
                Menu item 2
                <wje-menu slot="submenu" offset="5">
                  <wje-menu-item>Menu item 2.1</wje-menu-item>
                  <wje-menu-item>Menu item 2.2</wje-menu-item>
                  <wje-menu-item>Menu item 2.3</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item offset="10">Menu item 3</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item>
            <span>Two</span>
            <wje-icon slot="start" name="map-pin"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            <wje-icon slot="start" name="settings"></wje-icon>
            <span>Three</span>
          </wje-menu-item>
        </wje-menu>
    </>
  );
}
export default Example;
```
