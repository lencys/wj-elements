```html
<template>
  <wj-rate value="3.5" max="5" precision="0.1"></wj-rate>
</template>

<script lang="ts">
  import Rate from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: Rate,
  });
</script>
```
