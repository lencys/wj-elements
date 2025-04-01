```html
<template>
    <wje-checkbox placement="end">Default</wje-checkbox>
    <wje-checkbox placement="end" checked>Default checked</wje-checkbox>
</template>

<script lang="ts">
  import { Checkbox } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Checkbox },
  });
</script>
```
