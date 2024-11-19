```html
<template>
  <wje-format-digital value="99"></wje-format-digital><br />
  <wje-format-digital value="9900"></wje-format-digital><br />
  <wje-format-digital value="9900000"></wje-format-digital><br />
  <wje-format-digital value="9900000000"></wje-format-digital>
</template>

<script lang="ts">
  import FormatDigital from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: FormatDigital,
  });
</script>
```
