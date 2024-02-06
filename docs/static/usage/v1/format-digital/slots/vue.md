```html
<template>
  <wj-format-digital value="900000"><span slot="start">Nahraných: </span></wj-format-digital>
  <wj-format-digital value="9900000"><span slot="start">&nbsp;z </span></wj-format-digital>
</template>

<script lang="ts">
  import FormatDigital from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: FormatDigital,
  });
</script>
```
