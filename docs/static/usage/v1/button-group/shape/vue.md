```html
<template>
  <wj-button-group>
    <wj-button round>Start</wj-button>
    <wj-button round>Center</wj-button>
    <wj-button round>End</wj-button>
  </wj-button-group>
</template>

<script lang="ts">
  import { Button, ButtonGroup } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, ButtonGroup },
  });
</script>
```
