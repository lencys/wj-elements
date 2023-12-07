```html
<template>
  <wj-tooltip content="Lukáš Ondrejček">
    <wj-avatar label="Lukáš Ondrejček" initials></wj-avatar>
  </wj-tooltip>
</template>

<script lang="ts">
  import { Avatar, Tooltip } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar, Tooltip },
  });
</script>
```
