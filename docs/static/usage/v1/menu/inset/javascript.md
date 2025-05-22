```html
<wje-menu active>
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
  <wje-menu-item checked>Menu item</wje-menu-item>
  <wje-menu-item>Menu item</wje-menu-item>
  <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
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
  <wje-menu-item id="transformations">
    Menu item
    <wje-menu slot="submenu">
      <wje-menu-item>Menu item</wje-menu-item>
      <wje-menu-item>Menu item</wje-menu-item>
      <wje-menu-item>Menu item</wje-menu-item>
    </wje-menu>
  </wje-menu-item>
</wje-menu>
```
