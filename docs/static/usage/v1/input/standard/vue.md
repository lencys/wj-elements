```html
<template>
  <wje-input variant="standard" label="Default input"></wje-input>
  <wje-input variant="standard" label="Input with placeholder" placeholder="Enter company name"></wje-input>
  <wje-input variant="standard" label="Input with value" value="Mlynské Nivy 71"></wje-input>
  <wje-input variant="standard" label="Readonly input" value="Bratislava" readonly></wje-input>
  <wje-input variant="standard" label="Disabled input" value="84103" disabled></wje-input>
  <wje-input variant="standard" label="Default input" type="number" minlength="5" message="Toto je moja hlaska" required validate-on-change custom-error-display ></wje-input>
</template>

<script lang="ts">
  import { Input } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: Input,
  });
</script>
```
