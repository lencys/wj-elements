```html
<template>
  <wje-input variant="standard" label="Default input" class="example">
    <wje-button fill="solid" slot="end"><wje-icon name="search"></wje-icon></wje-button>
  </wje-input>
  <style>
    .example {
      --wje-input-slot-padding-inline: 0 !important;
    }

    .example wje-button {
      --wje-button-border-radius: 0 !important;
      --wje-color-base: #000000 !important;
    }
  </style>
</template>

<script lang="ts">
  import { Input, Button, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Input, Button, Icon },
  });
</script>
```
