```html
<template>
  <wje-carousel pagination loop navigation class="example-spacing">
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
  <style>
    .example-spacing {
      --wje-spacing-inline: 3rem;
    }
  </style>
</template>

<script lang="ts">
  import { Carousel } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Carousel },
  });
</script>
```
