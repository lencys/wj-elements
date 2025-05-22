```tsx
import React from 'react';
import { Menu, MenuItem, Divider, Icon, Button } from '@elements/react';
function Example() {
  return (
    <>
        <wje-button fill="link" toggle="off" id="toggle">
          <wje-icon name="chevron-left" slot="toggle"></wje-icon>
          <wje-icon name="chevron-right" slot="toggle"></wje-icon>
        </wje-button>
        <wje-menu id="custom" variant="nav" collapse active>
          <wje-menu-item>
            Home
            <wje-icon slot="start" name="home"></wje-icon>
            <span slot="tooltip-start">START</span>
            <span slot="tooltip-end">END</span>
          </wje-menu-item>
          <wje-menu-item>
            One
            <wje-icon slot="start" name="heart"></wje-icon>
            <wje-menu slot="submenu" variant="nav">
              <wje-menu-item>Menu item 1</wje-menu-item>
              <wje-menu-item>
                Menu item 2
                <wje-menu slot="submenu" variant="nav">
                  <wje-menu-item>Menu item 2.1</wje-menu-item>
                  <wje-menu-item>Menu item 2.2</wje-menu-item>
                  <wje-menu-item>Menu item 2.3</wje-menu-item>
                </wje-menu >
              </wje-menu-item>
              <wje-menu-item>Menu item 3</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item>
            Two
            <wje-icon slot="start" name="map-pin"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            Three
            <wje-icon slot="start" name="settings"></wje-icon>
          </wje-menu-item>
        </wje-menu>
    </>
  );
}
export default Example;
```
