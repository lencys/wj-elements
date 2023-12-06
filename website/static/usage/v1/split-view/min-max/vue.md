```html
<template>
  <wj-split-view min="50" max="50" initial="75">
    <div slot="start">Start</div>
    <div slot="end">End</div>
  </wj-split-view>
</template>

<script lang="ts">
  import { SplitView } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { SplitView },
  });
</script>
```
