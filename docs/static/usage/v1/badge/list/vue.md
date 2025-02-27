```html
<template>
  <wje-list>
    <wje-item>
      <wje-badge slot="start">11</wje-badge>
      <wje-label>Badge in start slot</wje-label>
    </wje-item>
    <wje-item>
      <wje-badge slot="end">22</wje-badge>
      <wje-label>Badge in end slot</wje-label>
    </wje-item>
  </wje-list>
</template>

<script lang="ts">
  import { Badge, Item, Label, List } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Badge, Item, Label, List },
  });
</script>
```
