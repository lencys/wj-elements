```html
<template>
    <wj-button fill="link" toggle="off">
      <wj-icon name="sun" slot="toggle" state="on" size="large"></wj-icon>
      <wj-icon name="moon" slot="toggle" state="off" size="large"></wj-icon>
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
