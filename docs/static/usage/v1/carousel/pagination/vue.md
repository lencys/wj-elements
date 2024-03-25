```html
<template>
  <wje-carousel pagination>
    <wje-carousel-item>
      <wje-img src="https://picsum.photos/500/375?i=1"></wje-img>
    </wje-carousel-item>
    <wje-carousel-item>
      <wje-img src="https://picsum.photos/500/375?i=2"></wje-img>
    </wje-carousel-item>
    <wje-carousel-item>
      <wje-img src="https://picsum.photos/500/375?i=3"></wje-img>
    </wje-carousel-item>
    <wje-carousel-item>
      <wje-img src="https://picsum.photos/500/375?i=4"></wje-img>
    </wje-carousel-item>
  </wje-carousel>
</template>

<script lang="ts">
  import { Carousel } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Carousel },
  });
</script>
```
