```html
<template>
  <wj-textarea label="Label" name="dog" rows="3" resize="auto" counter></wj-textarea>
</template>

<script lang="ts">
  import { Textarea } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Textarea },
  });
</script>
```
