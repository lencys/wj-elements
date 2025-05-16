```html
<template>
    <wje-kanban url="/api/applicants" id="basic"></wje-kanban>
</template>

<script lang="ts">
  import { Kanban } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Kanban },
  });
</script>
```
