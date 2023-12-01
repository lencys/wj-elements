```html
<template>
  <wj-grid>
    <wj-row>
      <wj-col>
        <wj-slider color="primary" value="50"></wj-slider>
      </wj-col>
      <wj-col>
        <wj-slider color="complete" value="50"></wj-slider>
      </wj-col>
      <wj-col>
        <wj-slider color="success" value="50"></wj-slider>
      </wj-col>
      <wj-col>
        <wj-slider color="warning" value="50"></wj-slider>
      </wj-col>
      <wj-col>
        <wj-slider color="danger" value="50"></wj-slider>
      </wj-col>
      <wj-col>
        <wj-slider color="dark" value="50"></wj-slider>
      </wj-col>
      <wj-col>
        <wj-slider color="light" value="50"></wj-slider>
      </wj-col>
    </wj-row>
  </wj-grid>
</template>

<script lang="ts">
  import { Slider } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Slider },
  });
</script>
```
