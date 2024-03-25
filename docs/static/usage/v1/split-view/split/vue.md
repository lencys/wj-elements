```html
<template>
  <wje-split-view initial="50">
    <div slot="start">Start</div>
    <div slot="end">
      <wje-split-view vertical id="custom-vertical-2">
        <div slot="start">Top</div>
        <div slot="end">Bottom</div>
      </wje-split-view>
    </div>
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
