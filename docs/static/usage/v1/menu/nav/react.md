```tsx
import React from 'react';
import { Menu, MenuItem, Divider, Icon } from '@elements/react';
function Example() {
  return (
    <>
       <wje-menu id="custom-1" variant="nav" active>
          <wje-menu-item>
            Home
            <wje-icon slot="start" name="home"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            One
            <wje-icon slot="start" name="heart"></wje-icon>
            <wje-menu slot="submenu" variant="nav">
              <wje-menu-item offset="10">Menu item 1</wje-menu-item>
              <wje-menu-item offset="10">
                Menu item 2
                <wje-menu slot="submenu" variant="nav">
                  <wje-menu-item offset="10">Menu item 2.1</wje-menu-item>
                  <wje-menu-item offset="10">Menu item 2.2</wje-menu-item>
                  <wje-menu-item offset="10">Menu item 2.3</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item offset="10">Menu item 3</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item>
            Two
            <wje-icon slot="start" name="map-pin"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            <wje-icon slot="start" name="settings"></wje-icon>
            Three
          </wje-menu-item>
        </wje-menu>
    </>
  );
}
export default Example;
```
