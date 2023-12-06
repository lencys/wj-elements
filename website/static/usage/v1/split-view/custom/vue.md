```html
<template>
  <wj-split-view id="custom">
    <div slot="start">Start</div>
    <wj-icon name="grip-vertical" slot="divider"></wj-icon>
    <div slot="end">End</div>
  </wj-split-view>
</template>

<script lang="ts">
  import { SplitView, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { SplitView, Icon },
  });
</script>
```
