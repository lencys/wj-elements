```html
<template>
  <wje-copy-button value="I am copy - Value" label="Kopírovať" label-success="Skopírované"></wje-copy-button>
</template>

<script lang="ts">
  import { CopyButton } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { CopyButton },
  });
</script>
```
