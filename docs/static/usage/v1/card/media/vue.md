```html
<template>
  <wje-card>
    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <wje-card-header>
      <wje-card-subtitle>Subtitle</wje-card-subtitle>
      <wje-card-title>Title</wje-card-title>
    </wje-card-header>
    <wje-card-content> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </wje-card-content>
  </wje-card>
</template>

<script lang="ts">
  import { Card, CardContent, CardHeader, CardSubtitle, CardTitle } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Card, CardContent, CardHeader, CardSubtitle, CardTitle },
  });
</script>
```
