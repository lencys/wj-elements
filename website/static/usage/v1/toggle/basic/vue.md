```html
<template>
  <wj-item>
    <wj-toggle>Default Toggle</wj-toggle>
  </wj-item>
  <wj-item>
    <wj-toggle checked>Checked Toggle</wj-toggle>
  </wj-item>
  <wj-item>
    <wj-toggle disabled>Disabled Toggle</wj-toggle>
  </wj-item>
  <wj-item>
    <wj-toggle checked disabled>Disabled Checked Toggle</wj-toggle>
  </wj-item>
  <wj-item>
    <wj-toggle color="success" checked disabled>Disabled Checked Toggle</wj-toggle>
  </wj-item>
</template>

<script lang="ts">
  import { Toggle, Item } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Toggle, Item },
  });
</script>
```
