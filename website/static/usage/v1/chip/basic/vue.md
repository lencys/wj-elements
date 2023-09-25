```html
<template>
  <wj-chip>Default</wj-chip>
  <wj-chip active>Default</wj-chip>
  <wj-chip disabled>Disabled</wj-chip>
</template>

<script lang="ts">
  import { Chip, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Chip },
  });
</script>
```
