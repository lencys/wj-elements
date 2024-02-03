```html
<template>
  <wj-checkbox>Default</wj-checkbox>
  <wj-checkbox checked>Default checked</wj-checkbox>
  <wj-checkbox disabled>Default disabled</wj-checkbox>
  <wj-checkbox checked disabled>Default checked disabled</wj-checkbox>
  <wj-checkbox color="primary" checked>Default primary checked</wj-checkbox>
  <wj-checkbox color="warning">Default warning</wj-checkbox>
</template>

<script lang="ts">
  import { Checkbox } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Checkbox },
  });
</script>
```
