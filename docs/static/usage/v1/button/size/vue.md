```html
<template>
  <wje-button size="small">Small</wje-button>
  <wje-button size="default">Default</wje-button>
  <wje-button size="large">Large</wje-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>
```
