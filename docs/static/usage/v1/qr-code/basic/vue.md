```html
<template>
  <wje-qr-code
    value="https://www.mcdonalds.sk/"
    size="200"
    padding="25"
    foreground="#000000"
    foreground-alpha="1"
    background="#ffffff"
    background-alpha="1"
    level="L"
  >
    <h3 slot="top">Name on top of QR code</h3>
    <h3 slot="bottom">Name on bottom of QR code</h3>
  </wje-qr-code>
</template>

<script lang="ts">
  import { QrCode } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { QrCode },
  });
</script>
```
