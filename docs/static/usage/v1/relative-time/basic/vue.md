```html
<template>
  <b>No date</b>
  <wj-relative-time></wj-relative-time><br/>
  
  <b>Timestamp</b>
  <wj-relative-time date="1704067200"></wj-relative-time><br/>
  
  <b>ISO Date</b>
  <wj-relative-time date="2024-01-01T00:00:00+00:00"></wj-relative-time><br/>
</template>

<script lang="ts">
  import RelativeTime from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: RelativeTime,
  });
</script>
```
