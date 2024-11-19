```html
<template>
  <wje-radio-group value="dog">
    <wje-radio value="cat">Cat</wje-radio>
    <wje-radio value="dog">Dog</wje-radio>
    <wje-radio value="elephant" disabled="">Elephant</wje-radio>
    <wje-radio value="rabbit">Rabbit</wje-radio>
  </wje-radio-group>
</template>

<script lang="ts">
  import { Radio, RadioGroup } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Radio, RadioGroup },
  });
</script>
```
