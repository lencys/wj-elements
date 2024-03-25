```html
<template>
  <wje-chip>Default</wje-chip>
  <wje-chip color="primary">Primary</wje-chip>
  <wje-chip color="complete">Complete</wje-chip>
  <wje-chip color="success">Success</wje-chip>
  <wje-chip color="warning">Warning</wje-chip>
  <wje-chip color="danger">Danger</wje-chip>
  <wje-chip color="info">Info</wje-chip>
  <wje-chip color="menu">Menu</wje-chip>
</template>

<script lang="ts">
  import { Chip } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Chip },
  });
</script>
```
