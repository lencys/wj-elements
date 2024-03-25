```tsx
import React from 'react';
import { Menu, MenuItem, Divider, Icon } from '@elements/react';
function Example() {
  return (
    <>
      <wje-menu active style="max-width: 200px;">
        <wje-menu-item>
          Menu item
          <wje-icon slot="start" name="home"></wje-icon>
        </wje-menu-item>
        <wje-menu-item>
          Menu item
          <wje-icon slot="end" name="heart"></wje-icon>
        </wje-menu-item>
        <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
        <wje-menu-item>Menu item</wje-menu-item>
        <wje-menu-item>Menu item</wje-menu-item>
        <wje-menu-item>Menu item</wje-menu-item>
        <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
        <wje-menu-label>Next menu</wje-menu-label>
        <wje-menu-item>
          Menu item
          <wje-menu slot="submenu">
            <wje-menu-item>Menu item</wje-menu-item>
            <wje-menu-item>
              Menu item
              <wje-menu slot="submenu">
                <wje-menu-item>Menu item</wje-menu-item>
                <wje-menu-item>Menu item</wje-menu-item>
                <wje-menu-item>Menu item</wje-menu-item>
              </wje-menu>
            </wje-menu-item>
            <wje-menu-item>Menu item</wje-menu-item>
          </wje-menu>
        </wje-menu-item>
        <wje-menu-item>
          Menu item
          <wje-menu slot="submenu">
            <wje-menu-item>Menu item</wje-menu-item>
            <wje-menu-item>
              Menu item
              <wje-menu slot="submenu">
                <wje-menu-item>Menu item</wje-menu-item>
                <wje-menu-item>Menu item</wje-menu-item>
                <wje-menu-item>Menu item</wje-menu-item>
              </wje-menu>
            </wje-menu-item>
            <wje-menu-item>Menu item</wje-menu-item>
          </wje-menu>
        </wje-menu-item>
      </wje-menu>
    </>
  );
}
export default Example;
```
