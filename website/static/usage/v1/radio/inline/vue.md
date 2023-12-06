```html
<template>
  <wj-radio-group inline>
    <wj-radio value="cat">Cat</wj-radio>
    <wj-radio value="dog">Dog</wj-radio>
    <wj-radio value="horse">Horse</wj-radio>
    <wj-radio value="rabbit" >Rabbit</wj-radio>
    <wj-radio value="hen">Hen</wj-radio>
    <wj-radio value="goose">Goose</wj-radio>
    <wj-radio value="duck">Duck</wj-radio>
    <wj-radio value="pig" >Pig</wj-radio>
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
