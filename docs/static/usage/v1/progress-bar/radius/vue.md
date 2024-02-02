```html
<template>
  <wj-progress-bar progress="60" radius="70" type="circle" shadow="open"></wj-progress-bar>
</template>

<script lang="ts">
  import { ProgressBar } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { ProgressBar },
  });
</script>
```
