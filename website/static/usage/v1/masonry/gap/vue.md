```html
<template>
  <wj-masonry cols="2" gap="2" class="example" id="example-gap">
    <div style="height: 300px">1</div>
    <div style="height: 375px">2</div>
    <div style="height: 250px">3</div>
    <div style="height: 377px">4</div>
    <div style="height: 200px">5</div>
  </wj-masonry>
  <style>
    #example-gap div {
      color: var(--wj-color-white);
      background: var(--wj-color-danger);
    }
  </style>
</template>

<script lang="ts">
  import Masonry from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: Masonry,
  });
</script>
```
