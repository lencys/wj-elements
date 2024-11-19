```html
<template>
  <wje-card>
    <wje-card-header separator>
      <wje-card-subtitle>Subtitle</wje-card-subtitle>
      <wje-card-title>Title</wje-card-title>
      <wje-card-controls>
        <wje-button fill="link" size="small">
          <wje-icon name="up-right-and-down-left-from-center" slot="icon-only"></wje-icon>
        </wje-button>
        <wje-button fill="link" size="small">
          <wje-icon name="chevron-up" slot="icon-only"></wje-icon>
        </wje-button>
        <wje-button fill="link" size="small">
          <wje-icon name="rotate-right" slot="icon-only"></wje-icon>
        </wje-button>
        <wje-button fill="link" size="small">
          <wje-icon name="ellipsis" slot="icon-only"></wje-icon>
        </wje-button>
        <wje-button fill="link" size="small">
          <wje-icon name="xmark" slot="icon-only"></wje-icon>
        </wje-button>
      </wje-card-controls>
    </wje-card-header>
    <wje-card-content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </wje-card-content>
  </wje-card>
</template>

<script lang="ts">
  import { Button, Card, CardContent, CardControls, CardHeader, CardSubtitle, CardTitle } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, Card, CardContent, CardControls, CardHeader, CardSubtitle, CardTitle },
  });
</script>
```
