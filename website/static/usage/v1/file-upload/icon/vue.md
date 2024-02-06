```html
<template>
    <wj-file-upload max-file-size="10000" accepted-types="mp4" icon>
      <wj-icon name="cloud-upload" style="--wj-icon-size: 4rem;"></wj-icon>
      <p>Drag and drop to upload</p>
    </wj-file-upload>
</template>

<script lang="ts">
  import { FileUpload, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { FileUpload, Icon },
  });
</script>
```
