```html
<template>
  <input id="copy-input" value="I am copy - Input">
  <wj-copy-button for="copy-input"></wj-copy-button>
</template>

<script lang="ts">
  import { CopyButton } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { CopyButton },
  });
</script>
```
