```html
<template>
  <wj-button-group>
    <wj-button>Start</wj-button>
    <wj-button>Center</wj-button>
    <wj-button>End</wj-button>
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
