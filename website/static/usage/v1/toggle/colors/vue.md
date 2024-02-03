```html
<template>
  <wj-item>
    <wj-toggle checked>Default Toggle</wj-toggle>
  </wj-item>
  <wj-item>
    <wj-toggle color="primary" checked>Primary Toggle</wj-toggle>
  </wj-item>
  <wj-item>
    <wj-toggle color="complete" checked>Complete Toggle</wj-toggle>
  </wj-item>
  <wj-item>
    <wj-toggle color="success" checked>Success Toggle</wj-toggle>
  </wj-item>
  <wj-item>
    <wj-toggle color="warning" checked>Warning Toggle</wj-toggle>
  </wj-item>
  <wj-item>
    <wj-toggle color="danger" checked>Danger Toggle</wj-toggle>
  </wj-item>
  <wj-item>
    <wj-toggle color="dark" checked>Dark Toggle</wj-toggle>
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
