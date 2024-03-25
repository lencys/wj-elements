```html
<template>
    <wje-file-upload-item name="tralala.png" size="1000000">
      <wje-img slot="img" src="https://picsum.photos/42/42?i=1"></wje-img>
    </wje-file-upload-item>
</template>

<script lang="ts">
  import { FileUploadItem, Image } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { FileUploadItem, Image }
  });
</script>
```
