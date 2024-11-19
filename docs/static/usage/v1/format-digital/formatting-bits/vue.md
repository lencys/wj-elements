```html
<template>
  <wje-format-digital value="99" unit="bit"></wje-format-digital><br />
  <wje-format-digital value="9900" unit="bit"></wje-format-digital><br />
  <wje-format-digital value="9900000" unit="bit"></wje-format-digital><br />
  <wje-format-digital value="9900000000" unit="bit"></wje-format-digital>
</template>

<script lang="ts">
  import FormatDigital from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: FormatDigital,
  });
</script>
```
