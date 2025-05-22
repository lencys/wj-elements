```html
<template>
    <wje-level-indicator level="1" colorize></wje-level-indicator>
    <wje-level-indicator level="2" colorize></wje-level-indicator>
    <wje-level-indicator level="3" colorize></wje-level-indicator>
</template>

<script lang="ts">
  import { LevelIndicator } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { LevelIndicator },
  });
</script>
```
