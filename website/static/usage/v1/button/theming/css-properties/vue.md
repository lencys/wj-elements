```html
<template>
  <wj-button id="custom">Custom</wj-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>

<style scoped>
  wj-button#custom {
    --wj-color-base: #000000;
    --wj-button-border-color: #0af4fc;
    --wj-button-border-radius: 0;
    --wj-color-contrast: #0af4fc;
    --wj-padding-top: 1rem;
    --wj-padding-start: .7rem;
    --wj-padding-end: .7rem;
    --wj-padding-bottom: 1rem;
  }
</style>
```
