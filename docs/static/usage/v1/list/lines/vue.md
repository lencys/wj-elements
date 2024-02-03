```html
<template>
  <wj-list lines="full">
    <wj-item>
      <wj-label>Full Lines</wj-label>
    </wj-item>
    <wj-item>
      <wj-label>Full Lines</wj-label>
    </wj-item>
    <wj-item>
      <wj-label>Full Lines</wj-label>
    </wj-item>
  </wj-list>

  <wj-list lines="inset">
    <wj-item>
      <wj-label>Inset Lines</wj-label>
    </wj-item>
    <wj-item>
      <wj-label>Inset Lines</wj-label>
    </wj-item>
    <wj-item>
      <wj-label>Inset Lines</wj-label>
    </wj-item>
  </wj-list>

  <wj-list lines="none">
    <wj-item>
      <wj-label>No Lines</wj-label>
    </wj-item>
    <wj-item>
      <wj-label>No Lines</wj-label>
    </wj-item>
    <wj-item>
      <wj-label>No Lines</wj-label>
    </wj-item>
  </wj-list>
</template>

<script lang="ts">
  import { Item, Label, List } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Item, Label, List },
  });
</script>
```
