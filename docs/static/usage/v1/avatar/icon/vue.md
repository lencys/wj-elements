```html
<template>
    <wje-avatar>
      <wje-icon name="check" slot="icon"></wje-icon>
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
