```html
<template>
  <wje-progress-bar progress="80" stroke="12" linecap="round"></wje-progress-bar>
</template>

<script lang="ts">
  import { ProgressBar } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { ProgressBar },
  });
</script>
```
