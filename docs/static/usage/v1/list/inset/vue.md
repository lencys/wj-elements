```html
<template>
  <wje-list inset>
    <wje-item>
      <wje-label>Pokémon Yellow</wje-label>
    </wje-item>
    <wje-item>
      <wje-label>Mega Man X</wje-label>
    </wje-item>
    <wje-item>
      <wje-label>The Legend of Zelda</wje-label>
    </wje-item>
    <wje-item>
      <wje-label>Pac-Man</wje-label>
    </wje-item>
    <wje-item>
      <wje-label>Super Mario World</wje-label>
    </wje-item>
  </wje-list>
</template>

<script lang="ts">
  import { Item, Label, List } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Item, Label, List },
  });
</script>
```
