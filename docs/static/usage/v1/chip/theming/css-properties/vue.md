```html
<style>
  wj-chip#custom {
    --wj-chip-background: #00213f;
    --wj-chip-color: #adefd1;
  }
</style>

<template>
  <wj-chip id="custom">Default</wj-chip>
</template>

<script lang="ts">
  import { Chip } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Chip },
  });
</script>
```
