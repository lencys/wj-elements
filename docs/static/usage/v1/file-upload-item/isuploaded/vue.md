```html
<template>
    <wje-file-upload-item name="lorem-ipsum.png" size="1000000" is-uploaded="">
      <wje-img slot="img" src="https://picsum.photos/42/42?i=1"></wje-img>
    </wje-file-upload-item>
    <wje-file-upload-item name="lorem-ipsum.png" size="1000000" uploaded="500000" progress="50" lang="sk-sk" is-uploaded="">
      <wje-icon slot="img" name="video" size="large"></wje-icon>
    </wje-file-upload-item>
</template>

<script lang="ts">
  import { FileUploadItem, Icon, Image } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { FileUploadItem, Icon, Image },
  });
</script>
```
