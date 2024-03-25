```html
<template>
  <wje-button>Default</wje-button>
  <wje-button color="primary">Primary</wje-button>
  <wje-button color="complete">Complete</wje-button>
  <wje-button color="success">Success</wje-button>
  <wje-button color="warning">Warning</wje-button>
  <wje-button color="danger">Danger</wje-button>
  <wje-button color="neutral">Neutral</wje-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>
```
