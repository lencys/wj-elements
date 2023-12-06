```html
<template>
  <wj-avatar size="small">
    <wj-icon name="image" slot="icon"></wj-icon>
  </wj-avatar>
  <wj-avatar>
    <wj-icon name="image" slot="icon"></wj-icon>
  </wj-avatar>
  <wj-avatar size="large">
    <wj-icon name="image" slot="icon"></wj-icon>
  </wj-avatar>
</template>

<script lang="ts">
  import { Avatar, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar, Icon },
  });
</script>
```
