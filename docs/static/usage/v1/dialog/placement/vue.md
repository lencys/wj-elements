```html
<template>
  <wje-button dialog="open-modal">Open</wje-button>
  <wje-dialog trigger="open-modal" title="Title">
    <h4>Lorem ipsum dolor sit amet</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
    <div slot="footer">
      <wje-button>Zatvoriť</wje-button>
      <wje-button color="primary">Potvrdiť</wje-button>
    </div>
  </wje-dialog>
</template>

<script lang="ts">
  import { Button, Dialog } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, Dialog },
  });
</script>
```
