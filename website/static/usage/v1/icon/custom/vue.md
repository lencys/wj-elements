```html
<template>
  <wj-icon name="check"></wj-icon>
  <wj-icon name="check" size="large"></wj-icon>
  <wj-icon name="check" color="danger"></wj-icon>
  <wj-icon name="check" size="large" color="danger"></wj-icon>
</template>

<script lang="ts">
  import { Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Icon }
  });
</script>
```
