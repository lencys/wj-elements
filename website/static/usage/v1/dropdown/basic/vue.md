```html
<template>
  <wj-dropdown label="Start" placement="bottom-start" offset="5">
    <wj-button size="large" slot="trigger" stop-propagation="true" caret>Large</wj-button>
    <wj-menu variant="context">
      <wj-menu-item>
        <wj-icon name="plane" slot="start"></wj-icon>
        <wj-label>Menu item</wj-label>
      </wj-menu-item>
      <wj-menu-item>
        <wj-icon name="book" slot="start"></wj-icon>
        <wj-label>Menu item</wj-label>
      </wj-menu-item>
      <wj-menu-item>
        <wj-icon name="music" slot="start"></wj-icon>
        <wj-label>Menu item</wj-label>
      </wj-menu-item>
      <wj-menu-item>
        <wj-icon name="video" slot="start"></wj-icon>
        <wj-label>Menu item</wj-label>
      </wj-menu-item>
    </wj-menu>
  </wj-dropdown>
</template>

<script lang="ts">
  import { Dropdown, Button, Menu, MenuItem, Icon, Label } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Dropdown, Button, Menu, MenuItem, Icon, Label },
  });
</script>
```
