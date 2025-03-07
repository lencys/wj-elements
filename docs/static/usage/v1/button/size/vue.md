```html
<template>
    <wje-button size="small">Small</wje-button>
    <wje-button size="default">Default</wje-button>
    <wje-button size="large">Large</wje-button>
    <wje-button size="small"><wje-icon slot="start" name="star"></wje-icon>Small</wje-button>
    <wje-button><wje-icon slot="start" name="star"></wje-icon>Default</wje-button>
    <wje-button size="large"><wje-icon slot="start" name="star"></wje-icon>Large</wje-button>
</template>

<script lang="ts">
  import { Button, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, Icon },
  });
</script>
```
