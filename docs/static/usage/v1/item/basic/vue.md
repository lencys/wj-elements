```html
<template>
  <wje-item>
    <wje-label>Basic Item</wje-label>
  </wje-item>

  <wje-item>
    <wje-label>
      Multi-line text that should ellipsis when it is too long to fit on
      one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </wje-label>
  </wje-item>

  <wje-item>
    <wje-label class="wje-text-wrap">
      Multi-line text that should wrap when it is too long to fit on one
      line. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </wje-label>
  </wje-item>

  <wje-item>
    <wje-label>
      <h1>H1 Heading</h1>
      <p>Paragraph</p>
    </wje-label>
  </wje-item>

  <wje-item>
    <wje-label>
      <h2>H2 Heading</h2>
      <p>Paragraph</p>
    </wje-label>
  </wje-item>

  <wje-item>
    <wje-label>
      <h3>H3 Heading</h3>
      <p>Paragraph</p>
    </wje-label>
  </wje-item>
</template>

<script lang="ts">
  import { Item, Label } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Item, Label },
  });
</script>
```
