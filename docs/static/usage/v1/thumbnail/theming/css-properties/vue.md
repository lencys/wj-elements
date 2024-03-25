```html
<style>
  .example-thumbnail {
    --wje-thumbnail-width: 80px !important;
    --wje-thumbnail-height: 80px !important;
    --wje-border-radius: 24px !important;
  }
</style>

<template>
  <wje-thumbnail class="example-thumbnail">
    <img alt="Silhouette of mountains" src="../../../../../img/demos/thumbnail.svg" />
  </wje-thumbnail>
</template>

<script lang="ts">
  import { Thumbnail } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Thumbnail },
  });
</script>
```
