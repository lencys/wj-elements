```html
<template>
  <wj-chip>Default</wj-chip>
  <wj-chip color="primary">Primary</wj-chip>
  <wj-chip color="complete">Complete</wj-chip>
  <wj-chip color="success">Success</wj-chip>
  <wj-chip color="warning">Warning</wj-chip>
  <wj-chip color="danger">Danger</wj-chip>
  <wj-chip color="info">Info</wj-chip>
  <wj-chip color="menu">Menu</wj-chip>
</template>

<script lang="ts">
  import { Chip } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Chip },
  });
</script>
```
