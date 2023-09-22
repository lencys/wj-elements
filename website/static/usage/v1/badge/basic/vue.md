```html
<template>
  <wj-list>
    <wj-item shadow="open" class="wj-item-list">
      <wj-badge slot="start" shadow="open">11</wj-badge>
      <wj-label shadow="open">Badge in start slot</wj-label>
    </wj-item>
    <wj-item shadow="open" class="wj-item-list">
      <wj-badge slot="end" shadow="open">22</wj-badge>
      <wj-label shadow="open">Badge in end slot</wj-label>
    </wj-item>
  </wj-list>
</template>

<script lang="ts">
  import { Badge, Item, Label, List } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Badge, Item, Label, List },
  });
</script>
```
