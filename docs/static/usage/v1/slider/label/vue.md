```html
<template>
  <wje-slider min="20" max="80" value="50" bubble>
    <span size="large" slot="label">Lorem ipsum</span>
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
