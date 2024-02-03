```html
<template>
   <wj-item>
      <wj-label>Default Item Lines </wj-label>
    </wj-item>

    <wj-item lines="inset">
      <wj-label>Item Lines Inset</wj-label>
    </wj-item>

    <wj-item lines="full">
      <wj-label>Item Lines Full</wj-label>
    </wj-item>

    <wj-item lines="none">
      <wj-label>Item Lines None</wj-label>
    </wj-item>

    <wj-item>
      <wj-icon name="star" slot="start"></wj-icon>
      <wj-label>Default Item Lines</wj-label>
      <wj-icon name="info-circle" slot="end"></wj-icon>
    </wj-item>

    <wj-item lines="inset">
      <wj-icon name="star" slot="start"></wj-icon>
      <wj-label>Item Lines Inset</wj-label>
      <wj-icon name="info-circle" slot="end"></wj-icon>
    </wj-item>

    <wj-item lines="full">
      <wj-icon name="star" slot="start"></wj-icon>
      <wj-label>Item Lines Full</wj-label>
      <wj-icon name="info-circle" slot="end"></wj-icon>
    </wj-item>

    <wj-item lines="none">
      <wj-icon name="star" slot="start"></wj-icon>
      <wj-label>Item Lines None</wj-label>
      <wj-icon name="info-circle" slot="end"></wj-icon>
    </wj-item>
</template>

<script lang="ts">
  import { Item, Label } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Item, Label },
  });
</script>
```
