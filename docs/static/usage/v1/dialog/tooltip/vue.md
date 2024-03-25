```html
<template>
  <wje-tooltip content="Lukáš Ondrejček">
    <wje-avatar label="Lukáš Ondrejček" initials></wje-avatar>
  </wje-tooltip>
</template>

<script lang="ts">
  import { Avatar, Tooltip } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar, Tooltip },
  });
</script>
```
