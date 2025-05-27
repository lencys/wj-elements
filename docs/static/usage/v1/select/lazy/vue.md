```html
<template>
    <wje-select lazy id="lazy-update" placeholder="Select options" variant="standard" max-options="2" max-height="200px" multiple clearable>
      <wje-options lazy url="/api/options" item-value="value" item-text="text" lazy-load-size="6" option-array-path="data"></wje-options>
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
