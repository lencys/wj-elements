```html
<template>
  <wje-split-view vertical>
    <div slot="start">Top</div>
    <div slot="end">Bottom</div>
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
