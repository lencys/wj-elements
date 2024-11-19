```html
<template>
  <wje-input type="number" variant="standard" placeholder="Typing number" value="1000000"></wje-input>
  <wje-format-digital value="1000000" class="example"></wje-format-digital>
  <style>
    wje-input {
      width: 200px;
      margin-inline: 0 0.5rem;
      --wje-input-margin-bottom: 0;
    }
  </style>
</template>

<script lang="ts">
  import { FormatDigital, Input } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { FormatDigital, Input },
  });
</script>
```
