```html
<template>
  <wje-button>Default</wje-button>
  <wje-button fill="link">Link</wje-button>
  <wje-button fill="outline">Outline</wje-button>
  <wje-button fill="solid">Solid</wje-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>
```
