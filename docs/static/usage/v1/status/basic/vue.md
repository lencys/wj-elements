```html
<template>
    <wje-status color="danger" border="contrast-reverse">
      <wje-icon name="minus" size="2x-small"></wje-icon>
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
