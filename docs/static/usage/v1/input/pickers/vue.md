```html
<template>
  <wj-input variant="standard" label="Default input"></wj-input>
  <wj-input variant="standard" label="Input with placeholder" placeholder="Enter company name"></wj-input>
  <wj-input variant="standard" label="Input with value" value="Mlynské Nivy 71"></wj-input>
  <wj-input variant="standard" label="Readonly input" value="Bratislava" readonly></wj-input>
  <wj-input variant="standard" label="Disabled input" value="84103" disabled></wj-input>
  <wj-input variant="standard" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wj-input>
</template>

<script lang="ts">
  import { Input, IconPicker, ColorPicker } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: Input, IconPicker, ColorPicker,
  });
</script>
```
