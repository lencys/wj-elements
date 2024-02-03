```html
<template>
  <wj-select label="Label test" placeholder="Select option">
    <wj-option value="option-1">Option 1</wj-option>
    <wj-option value="option-2">
      Option 2
      <wj-icon name="heart" slot="end"></wj-icon>
    </wj-option>
    <wj-option value="option-3">Option 3</wj-option>
    <wj-option value="option-4">Option 4</wj-option>
  </wj-select>
</template>

<script>
  import { Select, Option, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Select, Option, Icon },
  });
</script>
```
