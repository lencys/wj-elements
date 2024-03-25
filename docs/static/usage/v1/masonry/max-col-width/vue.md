```html
<template>
  <wje-masonry max-col-width="150">
    <wje-img src="https://picsum.photos/400/500?i=1"></wje-img>
    <wje-img src="https://picsum.photos/400/375?i=2"></wje-img>
    <wje-img src="https://picsum.photos/400/200?i=3"></wje-img>
    <wje-img src="https://picsum.photos/400?/400i=4"></wje-img>
    <wje-img src="https://picsum.photos/400/375?i=5"></wje-img>
    <wje-img src="https://picsum.photos/400/500?i=6"></wje-img>
    <wje-img src="https://picsum.photos/400/200?i=7"></wje-img>
  </wje-masonry>
</template>

<script lang="ts">
  import { Masonry, Image } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Masonry, Image },
  });
</script>
```
