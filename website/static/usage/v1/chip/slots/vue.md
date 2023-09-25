```html
<template>
  <wj-chip>
    <wj-avatar>
      <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
    </wj-avatar>
    <wj-label>Avatar Chip</wj-label>
    <wj-icon name="circle-xmark"></wj-icon>
  </wj-chip>

  <wj-chip>
    <wj-icon name="location-pin" color="complete"></wj-icon>
    <wj-label>Icon Chip</wj-label>
    <wj-icon name="xmark"></wj-icon>
  </wj-chip>
</template>

<script lang="ts">
  import { Chip, Avatar, Label, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Chip, Avatar, Label, Icon }
  });
</script>
```
