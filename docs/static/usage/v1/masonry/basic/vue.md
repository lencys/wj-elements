```html
<template>
  <wje-masonry cols="2" class="example">
    <div style="height: 300px">1</div>
    <div style="height: 375px">2</div>
    <div style="height: 250px">3</div>
    <div style="height: 390px">4</div>
    <div style="height: 200px">5</div>
  </wje-masonry>
</template>

<script lang="ts">
  import Masonry from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: Masonry,
  });
</script>
```
