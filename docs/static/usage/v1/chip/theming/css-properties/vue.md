```html
<style>
  wje-chip#custom {
    --wje-chip-background: #00213f;
    --wje-chip-color: #adefd1;
  }
</style>

<template>
  <wje-chip id="custom">Default</wje-chip>
</template>

<script lang="ts">
  import { Chip } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Chip },
  });
</script>
```
