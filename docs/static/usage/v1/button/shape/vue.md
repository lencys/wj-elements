```html
<template>
  <wj-button shadow="open" class="wj-button-solid">Default</wj-button>
  <wj-button round shadow="open" class="wj-button-round wj-button-solid">Round</wj-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>
```
