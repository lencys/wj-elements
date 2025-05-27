```html
<template>
    <wje-select lazy placeholder="Select options" max-options="1" variant="standard" max-height="200px" find multiple clearable>
      <wje-options lazy url="/api/options" item-value="value" item-text="text" lazy-load-size="6"></wje-options>
    </wje-select>
    <wje-select lazy placeholder="Select options" variant="standard" max-height="200px" find clearable>
      <wje-options lazy url="/api/options" item-value="value" item-text="text" lazy-load-size="6"></wje-options>
    </wje-select>
    <wje-select lazy label="Label" placeholder="Select options" max-options="1" max-height="200px" find multiple clearable>
      <wje-options lazy url="/api/options" item-value="value" item-text="text" lazy-load-size="6"></wje-options>
    </wje-select>
    <wje-select lazy label="Label" placeholder="Select options" max-height="200px" find clearable>
      <wje-options lazy url="/api/options" item-value="value" item-text="text" lazy-load-size="6"></wje-options>
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
