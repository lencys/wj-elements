```html
<template>
  <wje-item>
    <wje-thumbnail slot="start">
      <img alt="Silhouette of mountains" src="../../../../img/demos/thumbnail.svg" />
    </wje-thumbnail>
    <wje-label>Item</wje-label>
  </wje-item>
</template>

<script lang="ts">
  import { Thumbnail, Item, Label } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Thumbnail, Item, Label },
  });
</script>
```
