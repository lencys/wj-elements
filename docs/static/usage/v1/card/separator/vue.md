```html
<template>
  <wj-card>
    <wj-card-header separator>
      <wj-card-subtitle>Subtitle</wj-card-subtitle>
      <wj-card-title>Title</wj-card-title>
      <wj-card-controls>
        <wj-button fill="link" size="small">
          <wj-icon name="up-right-and-down-left-from-center" slot="icon-only"></wj-icon>
        </wj-button>
        <wj-button fill="link" size="small">
          <wj-icon name="chevron-up" slot="icon-only"></wj-icon>
        </wj-button>
        <wj-button fill="link" size="small">
          <wj-icon name="rotate-right" slot="icon-only"></wj-icon>
        </wj-button>
        <wj-button fill="link" size="small">
          <wj-icon name="ellipsis" slot="icon-only"></wj-icon>
        </wj-button>
        <wj-button fill="link" size="small">
          <wj-icon name="xmark" slot="icon-only"></wj-icon>
        </wj-button>
      </wj-card-controls>
    </wj-card-header>
    <wj-card-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </wj-card-content>
  </wj-card>
</template>

<script lang="ts">
  import { Button, Card, CardContent, CardControls, CardHeader, CardSubtitle, CardTitle } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, Card, CardContent, CardControls, CardHeader, CardSubtitle, CardTitle },
  });
</script>
```
