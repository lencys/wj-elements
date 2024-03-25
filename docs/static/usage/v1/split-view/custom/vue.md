```html
<template>
  <wje-split-view id="custom">
    <div slot="start">Start</div>
    <wje-icon name="grip-vertical" slot="divider"></wje-icon>
    <div slot="end">End</div>
  </wje-split-view>
</template>

<script lang="ts">
  import { SplitView, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { SplitView, Icon },
  });
</script>
```
