```html
<template>
  <wj-radio-group value="dog">
    <wj-radio value="cat">Cat</wj-radio>
    <wj-radio value="dog">Dog</wj-radio>
    <wj-radio value="elephant" disabled="">Elephant</wj-radio>
    <wj-radio value="rabbit" >Rabbit</wj-radio>
  </wj-radio-group>
</template>

<script lang="ts">
  import { Radio, RadioGroup } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Radio, RadioGroup },
  });
</script>
```
