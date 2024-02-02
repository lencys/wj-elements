```html
<template>
  <wj-list>
    <wj-item>
      <wj-badge slot="start">11</wj-badge>
      <wj-label>Badge in start slot</wj-label>
    </wj-item>
    <wj-item>
      <wj-badge slot="end">22</wj-badge>
      <wj-label>Badge in end slot</wj-label>
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
