```html
<template>
  <wj-list inset>
    <wj-item>
      <wj-label>Pokémon Yellow</wj-label>
    </wj-item>
    <wj-item>
      <wj-label>Mega Man X</wj-label>
    </wj-item>
    <wj-item>
      <wj-label>The Legend of Zelda</wj-label>
    </wj-item>
    <wj-item>
      <wj-label>Pac-Man</wj-label>
    </wj-item>
    <wj-item>
      <wj-label>Super Mario World</wj-label>
    </wj-item>
  </wj-list>
</template>

<script lang="ts">
  import { Item, Label, List } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Item, Label, List },
  });
</script>
```
