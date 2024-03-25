```html
<template>
  <wje-card id="custom">
    <wje-card-header>
      <wje-card-subtitle>Subtitle</wje-card-subtitle>
      <wje-card-title>Title</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </wje-card-content>
  </wje-card>
</template>

<script lang="ts">
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
  });
</script>

<style scoped>
#custom {
  --wje-card-margin-top: 1rem;
  --wje-card-margin-bottom: 1rem;
  --wje-card-margin-inline: 1rem;
  --wje-color-contrast: #f0f;
  --wje-card-border-color: #000;
  --wje-border-size: 2px;
  --background-color: #000!important;
  --wje-font-size: .8rem;
  --wje-border-radius: 0;
}
</style>
```
