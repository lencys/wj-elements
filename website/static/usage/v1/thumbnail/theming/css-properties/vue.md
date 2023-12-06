```html
<style>
  .example-thumbnail {
    --wj-thumbnail-width: 80px !important;
    --wj-thumbnail-height: 80px !important;
    --wj-border-radius: 24px !important;
  }
</style>

<template>
  <wj-thumbnail class="example-thumbnail">
    <img alt="Silhouette of mountains" src="../../../../../img/thumbnail.svg" />
  </wj-thumbnail>
</template>

<script lang="ts">
  import { Thumbnail } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Thumbnail },
  });
</script>
```
