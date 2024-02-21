```html
<template>
  <wj-select placeholder="Select options" variant="standard" max-options="2" variant="standard" multiple clearable>
    <wj-option value="option-1">Option 1</wj-option>
    <wj-option value="option-2">
      Option 2
      <wj-icon name="heart" slot="end"></wj-icon>
    </wj-option>
    <wj-option value="option-3" selected>Option 3</wj-option>
    <wj-option value="option-4" selected>Option 4</wj-option>
    <wj-option value="option-5" selected>Option 5</wj-option>
    <wj-option value="option-6">Option 6</wj-option>
  </wj-select>
</template>

<script>
  import { Select, Option } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Select, Option },
  });
</script>
```
