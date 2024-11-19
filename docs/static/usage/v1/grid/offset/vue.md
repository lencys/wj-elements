```html
<template>
  <span>Stĺpec 2 má <strong>offset</strong> nastavený na <strong>"3"</strong></span>
  <wje-grid>
    <wje-row>
      <wje-col>1</wje-col>
      <wje-col offset="3">2</wje-col>
      <wje-col>3</wje-col>
    </wje-row>
  </wje-grid>

  <span>Stĺpec 5 má <strong>offset</strong> nastavený na <strong>"2"</strong></span>
  <wje-grid>
    <wje-row>
      <wje-col>1</wje-col>
      <wje-col>2</wje-col>
      <wje-col>3</wje-col>
      <wje-col>4</wje-col>
      <wje-col offset="2">5</wje-col>
    </wje-row>
  </wje-grid>

  <span>Stĺpec 1 má <strong>offset</strong> nastavený na <strong>"4"</strong></span>
  <wje-grid>
    <wje-row>
      <wje-col size="2" offset="4">1</wje-col>
      <wje-col size="2">2</wje-col>
    </wje-row>
  </wje-grid>
</template>

<script>
  import { Col, Grid, Row } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Col, Grid, Row },
  });
</script>
```
