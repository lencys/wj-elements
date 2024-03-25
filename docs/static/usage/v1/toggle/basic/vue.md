```html
<template>
  <wje-item>
    <wje-toggle>Default Toggle</wje-toggle>
  </wje-item>
  <wje-item>
    <wje-toggle checked>Checked Toggle</wje-toggle>
  </wje-item>
  <wje-item>
    <wje-toggle disabled>Disabled Toggle</wje-toggle>
  </wje-item>
  <wje-item>
    <wje-toggle checked disabled>Disabled Checked Toggle</wje-toggle>
  </wje-item>
  <wje-item>
    <wje-toggle color="success" checked disabled>Disabled Checked Toggle</wje-toggle>
  </wje-item>
</template>

<script lang="ts">
  import { Toggle, Item } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Toggle, Item },
  });
</script>
```
