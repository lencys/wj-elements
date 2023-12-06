```html
<template>
  <wj-split-view initial="50">
    <div slot="start">Start</div>
    <div slot="end">
      <wj-split-view vertical id="custom-vertical-2">
        <div slot="start">Top</div>
        <div slot="end">Bottom</div>
      </wj-split-view>
    </div>
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
