```html
<template>
  <wje-label id="copy">I am copy - Element</wje-label>
  <wje-copy-button for="copy"></wje-copy-button>
</template>

<script lang="ts">
  import { CopyButton, Label } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { CopyButton, Label },
  });
</script>
```
