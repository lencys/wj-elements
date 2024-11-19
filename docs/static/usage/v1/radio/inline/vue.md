```html
<template>
  <wje-radio-group inline>
    <wje-radio value="cat">Cat</wje-radio>
    <wje-radio value="dog">Dog</wje-radio>
    <wje-radio value="horse">Horse</wje-radio>
    <wje-radio value="rabbit">Rabbit</wje-radio>
    <wje-radio value="hen">Hen</wje-radio>
    <wje-radio value="goose">Goose</wje-radio>
    <wje-radio value="duck">Duck</wje-radio>
    <wje-radio value="pig">Pig</wje-radio>
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
