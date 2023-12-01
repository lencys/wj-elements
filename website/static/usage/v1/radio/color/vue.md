```html
<template>
  <wj-radio-group value="complete">
    <wj-radio value="default">Default</wj-radio>
    <wj-radio value="success" color="success">Success</wj-radio>
    <wj-radio value="primary" color="primary">Primary</wj-radio>
    <wj-radio value="complete" color="complete">Complete</wj-radio>
    <wj-radio value="warning" color="warning">Warning</wj-radio>
    <wj-radio value="danger" color="danger">Danger</wj-radio>
    <wj-radio value="neutral" color="neutral">Neutral</wj-radio>
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
