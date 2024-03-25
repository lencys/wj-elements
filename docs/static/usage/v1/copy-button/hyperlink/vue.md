```html
<template>
  <a href="http://www.google.com" id="copy-href">I am copy - Href</a>
  <wje-copy-button for="copy-href"></wje-copy-button>
</template>

<script lang="ts">
  import { CopyButton } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components:  CopyButton,
  });
</script>
```
