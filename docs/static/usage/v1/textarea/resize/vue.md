```html
<template>
  <wje-textarea label="Label" name="dog" rows="4" resize="none"></wje-textarea>
</template>

<script lang="ts">
  import { Textarea } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Textarea },
  });
</script>
```
