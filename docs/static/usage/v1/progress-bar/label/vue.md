```html
<template>
  <wj-progress-bar progress="60" type="circle" radius="30">
    <wj-label slot="start">Slot Start</wj-label>
    <wj-label slot="end">Slot End</wj-label>
  </wj-progress-bar>
</template>

<script lang="ts">
  import { ProgressBar, Label } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { ProgressBar, Label },
  });
</script>
```
