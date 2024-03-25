```html
<template>
  <wje-icon name="check"></wje-icon>
  <wje-icon name="check" size="large"></wje-icon>
  <wje-icon name="check" color="danger"></wje-icon>
  <wje-icon name="check" size="large" color="danger"></wje-icon>
</template>

<script lang="ts">
  import { Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Icon }
  });
</script>
```
