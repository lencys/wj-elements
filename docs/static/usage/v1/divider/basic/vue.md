```html
<template>
    <wje-divider style="--wje-divider-spacing: 1rem;"></wje-divider>
    <wje-menu active style="max-width: 200px;">
      <wje-menu-item>
        Menu item
      </wje-menu-item>
      <wje-menu-item>
        Menu item
        <wje-icon slot="end" name="heart"></wje-icon>
      </wje-menu-item>
      <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
      <wje-menu-item>Menu item</wje-menu-item>
      <wje-menu-item>Menu item</wje-menu-item>
    </wje-menu>
</template>

<script lang="ts">
  import {  Divider, Menu, MenuItem } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {  Divider, Menu, MenuItem },
  });
</script>
```
