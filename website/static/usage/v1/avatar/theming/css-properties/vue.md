```html
<template>
  <wj-avatar id="custom" label="Lukáš Ondrejček" initials></wj-avatar>
</template>

<script lang="ts">
  import { Avatar } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar },
  });
</script>

<style scoped>
  wj-avatar#custom {
    --wj-avatar-width: 100px;
    --wj-avatar-height: 100px;
    --wj-avatar-font-size: 2rem;
    --wj-avatar-font-weight: 700;
    --wj-avatar-color: #000 !important;
    --wj-avatar-background-color: #ff0000 !important;
  }
</style>
```
