```html
<template>
  <wje-chip>
    <wje-avatar>
      <wje-img src="/img/demos/avatar.svg"></wje-img>
    </wje-avatar>
    <wje-label>Avatar Chip</wje-label>
    <wje-icon name="circle-xmark"></wje-icon>
  </wje-chip>

  <wje-chip removable>
    <wje-icon name="location-pin" color="complete"></wje-icon>
    <wje-label>Icon Chip</wje-label>
  </wje-chip>
</template>

<script lang="ts">
  import { Chip, Avatar, Label, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Chip, Avatar, Label, Icon },
  });
</script>
```
