```html
<template>
  <wje-level-indicator level="2" class="example-bars"></wje-level-indicator>
</template>

<script lang="ts">
  import { LevelIndicator } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { LevelIndicator },
  });
</script>
<style>
.example-bars {
  --wje-level-indicator-width: 32px;
}
</style>
```
