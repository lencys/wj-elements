```html
<template>
    <wj-file-upload-item name="tralala.png" size="1000000" uploaded="500000" progress="50" lang="sk">
    <wj-icon slot="img" name="video" size="large"></wj-icon>
  </wj-file-upload-item>
</template>

<script lang="ts">
  import { FileUploadItem, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { FileUploadItem, Icon }
  });
</script>
```
