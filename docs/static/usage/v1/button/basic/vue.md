```html
<template>
    <wj-button>Default</wj-button>
    <wj-button disabled>Disabled</wj-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>
```
