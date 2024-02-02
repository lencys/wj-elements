```html
<template>
<wj-slider class="example" min="20" max="80" value="50" bubble>
  <wj-icon name="volume-3" size="large" slot="start"></wj-icon>
  <wj-icon name="volume" size="large" slot="end"></wj-icon>
  <style>
      .example wj-icon {
          --wj-icon-size: 24px;
      }
  </style>
</wj-slider>
</template>

<script lang="ts">
  import { Slider } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Slider },
  });
</script>
```
