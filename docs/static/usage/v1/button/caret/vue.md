```html
<template>
    <wje-button color="default" fill="outline" size="small" caret>Small</wje-button>
    <wje-button color="default" fill="outline" caret id="caret">Default</wje-button>
    <wje-button color="default" fill="outline" size="large" caret>Large</wje-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>
```
