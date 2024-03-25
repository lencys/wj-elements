```html
<template>
  <wje-button-group>
    <wje-button>Start</wje-button>
    <wje-button>Center</wje-button>
    <wje-button>End</wje-button>
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
