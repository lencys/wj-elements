```html
<template>
  <wj-carousel pagination loop navigation class="example-spacing">
    <wj-carousel-item>
      <wj-img src="https://picsum.photos/500/375?i=1"></wj-img>
    </wj-carousel-item>
    <wj-carousel-item>
      <wj-img src="https://picsum.photos/500/375?i=2"></wj-img>
    </wj-carousel-item>
    <wj-carousel-item>
      <wj-img src="https://picsum.photos/500/375?i=3"></wj-img>
    </wj-carousel-item>
    <wj-carousel-item>
      <wj-img src="https://picsum.photos/500/375?i=4"></wj-img>
    </wj-carousel-item>
  </wj-carousel>
  <style>
    .example-spacing {
      --wj-spacing-inline: 3rem;
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
