```html
<template>
   <wj-input label="Label" id="copy-wj-input" value="I am copy - WJ Input">
    <wj-copy-button for="copy-wj-input" slot="end"></wj-copy-button>
  </wj-input>
</template>

<script lang="ts">
  import { CopyButton, Input } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { CopyButton, Input },
  });
</script>
```
