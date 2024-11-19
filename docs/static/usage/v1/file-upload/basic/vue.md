```html
<template>
  <wje-file-upload accepted-types="image/*">
    <p>Drag and drop files here</p>
  </wje-file-upload>
</template>

<script lang="ts">
  import FileUpload from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: FileUpload,
  });
</script>
```
