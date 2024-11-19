```html
<template>
  <wje-tooltip content="Som najkrajsi tooltip hore" offset="2">
    <wje-button size="large">Top</wje-button>
  </wje-tooltip>

  <wje-tooltip content="Som najkrajsi tooltip dole" placement="bottom" offset="10">
    <wje-button size="large">Bottom</wje-button>
  </wje-tooltip>

  <wje-tooltip content="Som najkrajsi tooltip vlavo" placement="left" offset="10">
    <wje-button size="large">Left</wje-button>
  </wje-tooltip>

  <wje-tooltip content="Som najkrajsi tooltip vpravo" placement="right" offset="10">
    <wje-button size="large">Right</wje-button>
  </wje-tooltip>
</template>

<script lang="ts">
  import { Tooltip, Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Tooltip, Button },
  });
</script>
```
