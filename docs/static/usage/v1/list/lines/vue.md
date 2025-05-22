```html
<template>
  <wje-list lines="none">
    <wje-item>
      <wje-label>No Lines</wje-label>
    </wje-item>
    <wje-item>
      <wje-label>No Lines</wje-label>
    </wje-item>
    <wje-item>
      <wje-label>No Lines</wje-label>
    </wje-item>
  </wje-list>
</template>

<script lang="ts">
  import { Item, Label, List } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Item, Label, List },
  });
</script>
```
