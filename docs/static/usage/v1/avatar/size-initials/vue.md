```html
<template>
    <wje-avatar size="small" label="Petr Rahman" initials></wje-avatar>
    <wje-avatar size="medium" label="Petr Rahman" initials></wje-avatar>
    <wje-avatar size="normal" label="Petr Rahman" initials></wje-avatar>
    <wje-avatar size="large" label="Petr Rahman" initials></wje-avatar>
    <wje-avatar size="x-large" label="Petr Rahman" initials></wje-avatar>
    <wje-avatar size="2x-large" label="Petr Rahman" initials></wje-avatar>
    <wje-avatar size="3x-large" label="Petr Rahman" initials></wje-avatar>
    <wje-avatar size="4x-large" label="Petr Rahman" initials></wje-avatar>
    <wje-avatar size="5x-large" label="Petr Rahman" initials></wje-avatar>
</template>

<script lang="ts">
  import { Avatar } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar },
  });
</script>
```
