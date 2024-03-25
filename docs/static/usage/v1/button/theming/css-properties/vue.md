```html
<template>
  <wje-button id="custom">Custom</wje-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>

<style scoped>
  wje-button#custom {
    --wje-color-base: #000000;
    --wje-button-border-color: #0af4fc;
    --wje-button-border-radius: 0;
    --wje-color-contrast: #0af4fc;
    --wje-padding-top: 1rem;
    --wje-padding-start: .7rem;
    --wje-padding-end: .7rem;
    --wje-padding-bottom: 1rem;
  }
</style>
```
