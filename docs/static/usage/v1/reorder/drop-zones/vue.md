```html
<wje-reorder>
  <wje-reorder-dropzone>
    <wje-reorder-item>Reorder item 1</wje-reorder-item>
    <wje-reorder-item>Reorder item 2</wje-reorder-item>
    <wje-reorder-item>Reorder item 3</wje-reorder-item>
    <wje-reorder-item>Reorder item 4</wje-reorder-item>
  </wje-reorder-dropzone>

  <wje-reorder-dropzone>
    <wje-reorder-item>test item 1</wje-reorder-item>
    <wje-reorder-item>test item 2</wje-reorder-item>
    <wje-reorder-item>test item 3</wje-reorder-item>
    <wje-reorder-item>test item 4</wje-reorder-item>
  </wje-reorder-dropzone>
</wje-reorder>

<script lang="ts">
  import { Reorder } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Reorder },
  });
</script>
```
