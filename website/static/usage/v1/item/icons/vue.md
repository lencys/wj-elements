```html
<template>
  <wj-item>
    <wj-label>Default Icon</wj-label>
    <wj-icon name="info-circle" slot="end"></wj-icon>
  </wj-item>

  <wj-item>
    <wj-label>Large Icon</wj-label>
    <wj-icon name="info-circle" size="large" slot="end"></wj-icon>
  </wj-item>

  <wj-item>
    <wj-label>Small Icon</wj-label>
    <wj-icon name="info-circle" size="small" slot="end"></wj-icon>
  </wj-item>

  <wj-item>
    <wj-icon name="star" slot="start"></wj-icon>
    <wj-label>Default Icon</wj-label>
  </wj-item>
</template>

<script lang="ts">
  import { Item, Label, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Item, Label, Icon },
  });
</script>
```
