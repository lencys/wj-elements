```html
<template>
  <wj-toggle id="custom-toggle" checked>Default Toggle
    <style>
      #custom-toggle {
        --wj-toggle-color-base: #ff0000;
        --wj-toggle-width: 60px;
        --wj-toggle-height: 8px;
        --wj-toggle-border-radius: 0;
        --wj-toggle-handle-width: 20px;
        --wj-toggle-handle-height: 20px;
        --wj-toggle-handle-border-radius: 0;
        --wj-toggle-handle-color: #996633;
        --wj-toggle-handle-shadow: none !important;
        --wj-toggle-handle-shadow-checked: none !important;
      }
    </style>
  </wj-toggle>
</template>

<script lang="ts">
  import { Toggle } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Toggle },
  });
</script>
```
