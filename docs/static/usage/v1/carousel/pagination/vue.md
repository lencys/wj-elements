```html
<template>
  <wj-label id="copy">I am copy - Element</wj-label>
  <wj-copy-button for="copy"></wj-copy-button>
</template>

<script lang="ts">
  import { CopyButton, Label } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { CopyButton, Label },
  });
</script>
```
