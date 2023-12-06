```html
<template>
  <wj-menu active style="max-width: 200px;">
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
    <wj-menu-item>Menu item</wj-menu-item>
    <wj-menu-item>Menu item</wj-menu-item>
    <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
    <wj-menu-label>Next menu</wj-menu-label>
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
  </wj-menu>
</template>

<script lang="ts">
  import { Menu, MenuItem, Divider, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Menu, MenuItem, Divider, Icon },
  });
</script>
```
