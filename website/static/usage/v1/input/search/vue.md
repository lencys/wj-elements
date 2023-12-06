```html
 <wj-input variant="standard" label="Default input" class="example">
  <wj-button fill="solid" slot="end"><wj-icon name="search"></wj-icon></wj-button>
</wj-input>
<style>
  .example {
    --wj-input-slot-padding-inline: 0 !important;
  }
  
  .example wj-button {
    --wj-button-border-radius: 0 !important;
    --wj-color-base: #000000 !important;
  }
</style>

<script lang="ts">
  import { Input, Button, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Input, Button, Icon },
  });
</script>
```
