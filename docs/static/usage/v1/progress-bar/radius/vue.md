```html
<template>
  <wje-progress-bar progress="60" radius="70" type="circle" shadow="open"></wje-progress-bar>
</template>

<script lang="ts">
  import { ProgressBar } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { ProgressBar },
  });
</script>
```
