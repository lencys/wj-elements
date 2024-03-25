```html
<template>
  <wje-button>
    <wje-icon slot="start" name="star"></wje-icon>
    Left Icon
  </wje-button>

  <wje-button>
    Right Icon
    <wje-icon slot="end" name="star"></wje-icon>
  </wje-button>

  <wje-button>
    <wje-icon slot="icon-only" name="star"></wje-icon>
  </wje-button>

  <wje-button fill="outline">
    <wje-icon slot="start" name="star"></wje-icon>
    Left Icon
  </wje-button>

  <wje-button fill="outline">
    Right Icon
    <wje-icon slot="end" name="star"></wje-icon>
  </wje-button>

  <wje-button fill="outline">
    <wje-icon slot="icon-only" name="star"></wje-icon>
  </wje-button>
</template>

<script lang="ts">
  import { Button, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, Icon },
  });
</script>
```
