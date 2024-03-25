```html
<template>
  <wje-item>
    <wje-label>Default Icon</wje-label>
    <wje-icon name="info-circle" slot="end"></wje-icon>
  </wje-item>

  <wje-item>
    <wje-label>Large Icon</wje-label>
    <wje-icon name="info-circle" size="large" slot="end"></wje-icon>
  </wje-item>

  <wje-item>
    <wje-label>Small Icon</wje-label>
    <wje-icon name="info-circle" size="small" slot="end"></wje-icon>
  </wje-item>

  <wje-item>
    <wje-icon name="star" slot="start"></wje-icon>
    <wje-label>Default Icon</wje-label>
  </wje-item>
</template>

<script lang="ts">
  import { Item, Label, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Item, Label, Icon },
  });
</script>
```
