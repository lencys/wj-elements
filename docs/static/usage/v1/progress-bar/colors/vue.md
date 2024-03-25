```html
<template>
  <wje-progress-bar progress="60" radius="20" color="primary"></wje-progress-bar>
  <wje-progress-bar progress="60" radius="20" color="complete"></wje-progress-bar>
  <wje-progress-bar progress="60" radius="20" color="success"></wje-progress-bar>
  <wje-progress-bar progress="60" radius="20" color="warning"></wje-progress-bar>
  <wje-progress-bar progress="60" radius="20" color="danger"></wje-progress-bar>
  <wje-progress-bar progress="60" radius="20" color="dark"></wje-progress-bar>
  <wje-progress-bar progress="60" radius="20" color="light"></wje-progress-bar>
</template>

<script lang="ts">
  import { ProgressBar } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { ProgressBar },
  });
</script>
```
