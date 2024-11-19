```html
<template>
  <wje-button>Default</wje-button>
  <wje-button disabled>Disabled</wje-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>
```
