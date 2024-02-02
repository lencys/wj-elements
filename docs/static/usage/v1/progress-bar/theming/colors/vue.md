```html
<template>
  <wj-progress-bar progress="60" radius="20" color="primary"></wj-progress-bar>
  <wj-progress-bar progress="60" radius="20" color="complete"></wj-progress-bar>
  <wj-progress-bar progress="60" radius="20" color="success"></wj-progress-bar>
  <wj-progress-bar progress="60" radius="20" color="warning"></wj-progress-bar>
  <wj-progress-bar progress="60" radius="20" color="danger"></wj-progress-bar>
  <wj-progress-bar progress="60" radius="20" color="dark"></wj-progress-bar>
  <wj-progress-bar progress="60" radius="20" color="light"></wj-progress-bar>
</template>

<script lang="ts">
  import { ProgressBar } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { ProgressBar },
  });
</script>
```
