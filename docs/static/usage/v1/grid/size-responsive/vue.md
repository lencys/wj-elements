```html
<template>
  <span>Naskladané pre xs breakpoint, rovnaká šírka pre sm a vyššie</span>
  <wj-grid>
    <wj-row>
      <wj-col size="12" size-sm="3">1</wj-col>
      <wj-col size="12" size-sm="3">2</wj-col>
      <wj-col size="12" size-sm="3">3</wj-col>
      <wj-col size="12" size-sm="3">4</wj-col>
    </wj-row>
  </wj-grid>

  <span>Rovnaká šírka do md, posledný stĺpec má plnú šírku pre md a vyššie</span>
  <wj-grid>
    <wj-row wrap>
      <wj-col size-md="6">1</wj-col>
      <wj-col size-md="6">2</wj-col>
      <wj-col size-md="12">3</wj-col>
    </wj-row>
  </wj-grid>

  <span>2 na riadok do breakpointu md, 3 na riadok pre md, rovnaká šírka pre lg a vyššie</span>
  <wj-grid>
    <wj-row wrap>
      <wj-col size="6" size-md="4" size-lg="2">1</wj-col>
      <wj-col size="6" size-md="4" size-lg="2">2</wj-col>
      <wj-col size="6" size-md="4" size-lg="2">3</wj-col>
      <wj-col size="6" size-md="4" size-lg="2">4</wj-col>
      <wj-col size="6" size-md="4" size-lg="2">5</wj-col>
      <wj-col size="6" size-md="4" size-lg="2">6</wj-col>
    </wj-row>
  </wj-grid>
</template>

<script>
  import { Col, Grid, Row } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Col, Grid, Row  },
  });
</script>
```
