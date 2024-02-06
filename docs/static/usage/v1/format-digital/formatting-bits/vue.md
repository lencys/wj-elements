```html
<template>
  <wj-format-digital value="99" unit="bit"></wj-format-digital><br/>
  <wj-format-digital value="9900" unit="bit"></wj-format-digital><br/>
  <wj-format-digital value="9900000" unit="bit"></wj-format-digital><br/>
  <wj-format-digital value="9900000000" unit="bit"></wj-format-digital>
</template>

<script lang="ts">
  import FormatDigital from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: FormatDigital,
  });
</script>
```
