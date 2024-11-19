```html
<template>
  <wje-input label="Label" id="copy-wje-input" value="I am copy - WJ Input">
    <wje-copy-button for="copy-wje-input" slot="end"></wje-copy-button>
  </wje-input>
</template>

<script lang="ts">
  import { CopyButton, Input } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { CopyButton, Input },
  });
</script>
```
