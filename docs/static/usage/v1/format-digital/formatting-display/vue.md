```html
<template>
  <wje-format-digital value="9900"></wje-format-digital><br />
  short<wje-format-digital value="9900" unit-display="short"></wje-format-digital><br />
  narrow<wje-format-digital value="9900" unit-display="narrow"></wje-format-digital><br />
  long<wje-format-digital value="9900" unit-display="long"></wje-format-digital>
</template>

<script lang="ts">
  import FormatDigital from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: FormatDigital,
  });
</script>
```
