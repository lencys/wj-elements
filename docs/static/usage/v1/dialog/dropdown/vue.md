```html
<template>
  <wj-dropdown id="custom-dropdown" placement="right-start" trigger="hover" offset="5">
    <wj-avatar label="Lukáš Ondrejček" initials slot="trigger"></wj-avatar>
    <wj-menu id="custom-menu" active>
      <h5 style="margin: 0;">Petr Rahman</h5>
      <p class="hint-text">Frontend Developer</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
    </wj-menu>
  </wj-dropdown>
</template>

<script lang="ts">
  import { Avatar, Dropdown, Menu } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar, Dropdown, Menu },
  });
</script>
```
