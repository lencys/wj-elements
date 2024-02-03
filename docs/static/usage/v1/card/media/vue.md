```html
<template>
  <wj-card>
    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <wj-card-header>
      <wj-card-subtitle>Subtitle</wj-card-subtitle>
      <wj-card-title>Title</wj-card-title>
    </wj-card-header>
    <wj-card-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </wj-card-content>
  </wj-card>
</template>

<script lang="ts">
  import { Card, CardContent, CardHeader, CardSubtitle, CardTitle } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Card, CardContent, CardHeader, CardSubtitle, CardTitle },
  });
</script>
```
