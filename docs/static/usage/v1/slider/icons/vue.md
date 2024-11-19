```html
<template>
  <wje-slider class="example" min="20" max="80" value="50" bubble>
    <wje-icon name="volume-3" size="large" slot="start"></wje-icon>
    <wje-icon name="volume" size="large" slot="end"></wje-icon>
    <style>
      .example wje-icon {
        --wje-icon-size: 24px;
      }
    </style>
  </wje-slider>
</template>

<script lang="ts">
  import { Slider } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Slider },
  });
</script>
```
