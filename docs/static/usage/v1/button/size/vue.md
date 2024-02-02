```html
<template>
  <wj-button size="small">Small</wj-button>
  <wj-button size="default">Default</wj-button>
  <wj-button size="large">Large</wj-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>
```
