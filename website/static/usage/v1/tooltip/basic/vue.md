```html
<template>
  <wj-tooltip content="Som najkrajsi tooltip hore"  offset="2">
    <wj-button size="large">Top</wj-button>
  </wj-tooltip>

  <wj-tooltip content="Som najkrajsi tooltip dole" placement="bottom" offset="10">
    <wj-button size="large">Bottom</wj-button>
  </wj-tooltip>

  <wj-tooltip content="Som najkrajsi tooltip vlavo" placement="left" offset="10">
    <wj-button size="large">Left</wj-button>
  </wj-tooltip>

  <wj-tooltip content="Som najkrajsi tooltip vpravo" placement="right" offset="10">
    <wj-button size="large">Right</wj-button>
  </wj-tooltip>
</template>

<script lang="ts">
  import { Tooltip, Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Tooltip, Button },
  });
</script>
```
