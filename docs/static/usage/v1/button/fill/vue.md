```html
<template>
  <wj-button>Default</wj-button>
  <wj-button fill="link">Link</wj-button>
  <wj-button fill="outline">Outline</wj-button>
  <wj-button fill="solid">Solid</wj-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>
```
