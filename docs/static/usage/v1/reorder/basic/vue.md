```html
<wje-reorder>
  <wje-reorder-item>Reorder item 1</wje-reorder-item>
  <wje-reorder-item>Reorder item 2</wje-reorder-item>
  <wje-reorder-item>Reorder item 3</wje-reorder-item>
  <wje-reorder-item>Reorder item 4</wje-reorder-item>
</wje-reorder>

<script lang="ts">
  import { Reorder } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Reorder },
  });
</script>
```
