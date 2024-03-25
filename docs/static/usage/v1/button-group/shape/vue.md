```html
<template>
  <wje-button-group>
    <wje-button round>Start</wje-button>
    <wje-button round>Center</wje-button>
    <wje-button round>End</wje-button>
  </wje-button-group>
</template>

<script lang="ts">
  import { Button, ButtonGroup } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, ButtonGroup },
  });
</script>
```
