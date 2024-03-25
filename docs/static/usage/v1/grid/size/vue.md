```html
<template>
  <span>Slĺpec 2 má <strong>size</strong> <strong>"8"</strong></span>
  <wje-grid>
    <wje-row>
      <wje-col>1</wje-col>
      <wje-col size="8">2</wje-col>
      <wje-col>3</wje-col>
    </wje-row>
  </wje-grid>

  <span>Stĺpce 3 & 4 majú <strong>size</strong> <strong>"3"</strong></span>
  <wje-grid>
    <wje-row>
      <wje-col>1</wje-col>
      <wje-col>2</wje-col>
      <wje-col size="3">3</wje-col>
      <wje-col size="3">4</wje-col>
      <wje-col>5</wje-col>
      <wje-col>6</wje-col>
    </wje-row>
  </wje-grid>

  <span>Stĺpce 1 & 2 majú <strong>size</strong> nastavenú na <strong>"4"</strong></span>
  <wje-grid>
    <wje-row>
      <wje-col size="4">1</wje-col>
      <wje-col size="4">2</wje-col>
    </wje-row>
  </wje-grid>
</template>

<script>
  import { Col, Grid, Row } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Col, Grid, Row  },
  });
</script>
```
