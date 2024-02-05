```html
<template>
  <wj-button fill="link" toggle="off">
    <wj-icon name="sun" slot="toggle"></wj-icon>
    <wj-icon name="moon" slot="toggle"></wj-icon>
  </wj-button>
  <wj-button fill="link" toggle="off">
    <span slot="toggle">On</span>
    <span slot="toggle">Off</span>
  </wj-button>
</template>

<script lang="ts">
  import { Button, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, Icon },
  });
</script>
```
