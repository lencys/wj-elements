```html
<template>
  <div>
    <wje-button @click="openDialog">JS Open</wje-button>
  </div>
</template>

<script lang="ts">
import { Button } from '@elements/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Button },
  methods: {
    openDialog() {
      const myDialog = document.createElement('wje-dialog');
      myDialog.setAttribute('headline', 'Title');
      myDialog.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.';
      
      document.body.appendChild(myDialog);
      
      myDialog.onOpen();
    }
  }
});
</script>
```
