```html
<template>
  <wje-avatar id="custom" label="Lukáš Ondrejček" initials></wje-avatar>
</template>

<script lang="ts">
  import { Avatar } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar },
  });
</script>

<style scoped>
  wje-avatar#custom {
    --wje-avatar-width: 100px;
    --wje-avatar-height: 100px;
    --wje-avatar-font-size: 2rem;
    --wje-avatar-font-weight: 700;
    --wje-avatar-color: #000 !important;
    --wje-avatar-background-color: #ff0000 !important;
  }
</style>
```
