```html
<template>
  <wj-button>
    <wj-icon slot="start" name="star"></wj-icon>
    Left Icon
  </wj-button>

  <wj-button>
    Right Icon
    <wj-icon slot="end" name="star"></wj-icon>
  </wj-button>

  <wj-button>
    <wj-icon slot="icon-only" name="star"></wj-icon>
  </wj-button>

  <wj-button fill="outline">
    <wj-icon slot="start" name="star"></wj-icon>
    Left Icon
  </wj-button>

  <wj-button fill="outline">
    Right Icon
    <wj-icon slot="end" name="star"></wj-icon>
  </wj-button>

  <wj-button fill="outline">
    <wj-icon slot="icon-only" name="star"></wj-icon>
  </wj-button>
</template>

<script lang="ts">
  import { Button, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, Icon },
  });
</script>
```
