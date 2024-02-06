```html
<template>
    <wj-input type="number" variant="standard" placeholder="Typing number" value="1000000"></wj-input>
    <wj-format-digital value="1000000" class="example"></wj-format-digital>
    <style>
      wj-input {
        width: 200px;
        margin-inline: 0 .5rem;
        --wj-input-margin-bottom: 0;
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
