```tsx
import React from 'react';
import { Menu, MenuItem, Divider, Icon } from '@elements/react';
function Example() {
  return (
    <>
      <wj-menu active style="max-width: 200px; --wj-menu-padding-inline: 1rem;">
        <wj-menu-item>
          Menu item
          <wj-icon slot="start" name="home"></wj-icon>
        </wj-menu-item>
        <wj-menu-item>
          Menu item
          <wj-icon slot="end" name="heart"></wj-icon>
        </wj-menu-item>
        <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
        <wj-menu-item>Menu item</wj-menu-item>
        <wj-menu-item checked>Menu item</wj-menu-item>
        <wj-menu-item>Menu item</wj-menu-item>
        <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
        <wj-menu-item>
          Menu item
          <wj-menu slot="submenu">
            <wj-menu-item>Menu item</wj-menu-item>
            <wj-menu-item>
              Menu item
              <wj-menu slot="submenu">
                <wj-menu-item>Menu item</wj-menu-item>
                <wj-menu-item>Menu item</wj-menu-item>
                <wj-menu-item>Menu item</wj-menu-item>
              </wj-menu>
            </wj-menu-item>
            <wj-menu-item>Menu item</wj-menu-item>
          </wj-menu>
        </wj-menu-item>
        <wj-menu-item id="transformations">
          Menu item
          <wj-menu slot="submenu">
            <wj-menu-item>Menu item</wj-menu-item>
            <wj-menu-item>Menu item</wj-menu-item>
            <wj-menu-item>Menu item</wj-menu-item>
          </wj-menu>
        </wj-menu-item>
      </wj-menu>
    </>
  );
}
export default Example;
```
