```html
<template>
  <wje-select placeholder="Select options" max-options="1" max-height="200px" multiple clearable>
    <wje-options url="/api/options" item-value="value" item-text="label"></wje-options>
  </wje-select>
</template>

<script>
  import { Select, Options } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Select, Options },
  });
</script>
```
