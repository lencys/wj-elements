```html
<template>
    <wje-status color="success">
      <wje-icon name="check" size="2x-small"></wje-icon>
    </wje-status>
    <wje-status color="success" size="medium">
      <wje-icon name="check" size="x-small"></wje-icon>
    </wje-status>
    <wje-status color="success" size="large">
      <wje-icon name="check" size="medium"></wje-icon>
    </wje-status>
</template>

<script lang="ts">
  import { Status, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Status, Icon },
  });
</script>
```
