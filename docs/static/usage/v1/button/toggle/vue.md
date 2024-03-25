```html
<template>
  <wje-button fill="link" toggle="off">
    <wje-icon name="sun" slot="toggle"></wje-icon>
    <wje-icon name="moon" slot="toggle"></wje-icon>
  </wje-button>
  <wje-button fill="link" toggle="off">
    <span slot="toggle">On</span>
    <span slot="toggle">Off</span>
  </wje-button>
</template>

<script lang="ts">
  import { Button, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, Icon },
  });
</script>
```
