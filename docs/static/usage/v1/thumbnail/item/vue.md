```html
<template>
  <wj-item>
    <wj-thumbnail slot="start">
      <img alt="Silhouette of mountains" src="../../../../img/thumbnail.svg" />
    </wj-thumbnail>
    <wj-label>Item</wj-label>
  </wj-item>
</template>

<script lang="ts">
  import { Thumbnail, Item, Label } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Thumbnail, Item, Label },
  });
</script>
```
