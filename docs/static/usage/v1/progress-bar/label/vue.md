```html
<template>
  <wje-progress-bar progress="60" type="circle" radius="30">
    <wje-label slot="start">Slot Start</wje-label>
    <wje-label slot="end">Slot End</wje-label>
  </wje-progress-bar>
</template>

<script lang="ts">
  import { ProgressBar, Label } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { ProgressBar, Label },
  });
</script>
```
