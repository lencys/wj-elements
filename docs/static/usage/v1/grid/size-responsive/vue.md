```html
<template>
  <span>Naskladané pre xs breakpoint, rovnaká šírka pre sm a vyššie</span>
  <wje-grid>
    <wje-row>
      <wje-col size="12" size-sm="3">1</wje-col>
      <wje-col size="12" size-sm="3">2</wje-col>
      <wje-col size="12" size-sm="3">3</wje-col>
      <wje-col size="12" size-sm="3">4</wje-col>
    </wje-row>
  </wje-grid>

  <span>Rovnaká šírka do md, posledný stĺpec má plnú šírku pre md a vyššie</span>
  <wje-grid>
    <wje-row wrap>
      <wje-col size-md="6">1</wje-col>
      <wje-col size-md="6">2</wje-col>
      <wje-col size-md="12">3</wje-col>
    </wje-row>
  </wje-grid>

  <span>2 na riadok do breakpointu md, 3 na riadok pre md, rovnaká šírka pre lg a vyššie</span>
  <wje-grid>
    <wje-row wrap>
      <wje-col size="6" size-md="4" size-lg="2">1</wje-col>
      <wje-col size="6" size-md="4" size-lg="2">2</wje-col>
      <wje-col size="6" size-md="4" size-lg="2">3</wje-col>
      <wje-col size="6" size-md="4" size-lg="2">4</wje-col>
      <wje-col size="6" size-md="4" size-lg="2">5</wje-col>
      <wje-col size="6" size-md="4" size-lg="2">6</wje-col>
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
