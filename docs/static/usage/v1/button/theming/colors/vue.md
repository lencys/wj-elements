```html
<template>
  <wj-button>Default</wj-button>
  <wj-button color="primary">Primary</wj-button>
  <wj-button color="complete">Complete</wj-button>
  <wj-button color="success">Success</wj-button>
  <wj-button color="warning">Warning</wj-button>
  <wj-button color="danger">Danger</wj-button>
  <wj-button color="neutral">Neutral</wj-button>
</template>

<script lang="ts">
  import { Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button },
  });
</script>
```
