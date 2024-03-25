```html
<template>
  <wje-avatar size="small">
    <wje-icon name="image" slot="icon"></wje-icon>
  </wje-avatar>
  <wje-avatar>
    <wje-icon name="image" slot="icon"></wje-icon>
  </wje-avatar>
  <wje-avatar size="large">
    <wje-icon name="image" slot="icon"></wje-icon>
  </wje-avatar>
</template>

<script lang="ts">
  import { Avatar, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar, Icon },
  });
</script>
```
