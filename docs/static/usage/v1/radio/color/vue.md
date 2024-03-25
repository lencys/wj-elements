```html
<template>
  <wje-radio-group value="complete">
    <wje-radio value="default">Default</wje-radio>
    <wje-radio value="success" color="success">Success</wje-radio>
    <wje-radio value="primary" color="primary">Primary</wje-radio>
    <wje-radio value="complete" color="complete">Complete</wje-radio>
    <wje-radio value="warning" color="warning">Warning</wje-radio>
    <wje-radio value="danger" color="danger">Danger</wje-radio>
    <wje-radio value="neutral" color="neutral">Neutral</wje-radio>
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
