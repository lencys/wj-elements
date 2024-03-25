```html
<template>
  <wje-chip>Default</wje-chip>
  <wje-chip active>Default</wje-chip>
  <wje-chip disabled>Disabled</wje-chip>
</template>

<script lang="ts">
  import { Chip, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Chip },
  });
</script>
```
