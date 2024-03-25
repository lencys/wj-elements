```html
<template>
  <wje-select placeholder="Select options" variant="standard" max-options="2" variant="standard" multiple clearable>
    <wje-option value="option-1">Option 1</wje-option>
    <wje-option value="option-2">
      Option 2
      <wje-icon name="heart" slot="end"></wje-icon>
    </wje-option>
    <wje-option value="option-3" selected>Option 3</wje-option>
    <wje-option value="option-4" selected>Option 4</wje-option>
    <wje-option value="option-5" selected>Option 5</wje-option>
    <wje-option value="option-6">Option 6</wje-option>
  </wje-select>
</template>

<script>
  import { Select, Option } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Select, Option },
  });
</script>
```
