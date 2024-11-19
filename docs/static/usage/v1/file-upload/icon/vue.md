```html
<template>
  <wje-file-upload max-file-size="10000" accepted-types="mp4" icon>
    <wje-icon name="cloud-upload" style="--wje-icon-size: 4rem;"></wje-icon>
    <p>Drag and drop to upload</p>
  </wje-file-upload>
</template>

<script lang="ts">
  import { FileUpload, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { FileUpload, Icon },
  });
</script>
```
