```html
<template>
  <wje-split-view initial="250">
    <div slot="start">Start</div>
    <div slot="end">End</div>
  </wje-split-view>
</template>

<script lang="ts">
  import { SplitView } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { SplitView },
  });
</script>
```
