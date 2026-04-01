```html
<template>
  <div>
    <wje-carousel pagination loop navigation slide-per-page="5" class="example-five-per-page">
      <wje-carousel-item><article class="demo-tile">1</article></wje-carousel-item>
      <wje-carousel-item><article class="demo-tile">2</article></wje-carousel-item>
      <wje-carousel-item><article class="demo-tile">3</article></wje-carousel-item>
      <wje-carousel-item><article class="demo-tile">4</article></wje-carousel-item>
      <wje-carousel-item><article class="demo-tile">5</article></wje-carousel-item>
      <wje-carousel-item><article class="demo-tile">6</article></wje-carousel-item>
      <wje-carousel-item><article class="demo-tile">7</article></wje-carousel-item>
      <wje-carousel-item><article class="demo-tile">8</article></wje-carousel-item>
      <wje-carousel-item><article class="demo-tile">9</article></wje-carousel-item>
      <wje-carousel-item><article class="demo-tile">10</article></wje-carousel-item>
    </wje-carousel>
  </div>
</template>

<script lang="ts">
  import { Carousel, CarouselItem } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Carousel, CarouselItem },
  });
</script>

<style scoped>
  .example-five-per-page {
    --wje-carousel-height: 180px;
    --wje-carousel-gap: 1rem;
  }

  .example-five-per-page .demo-tile {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 0.75rem;
    background: linear-gradient(135deg, #1b4965, #4f86c6);
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
  }
</style>
```
