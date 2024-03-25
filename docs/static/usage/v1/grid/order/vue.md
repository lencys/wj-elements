```html
<template>
  <span>Zmeníme poradie stĺpcov pomocou <strong>order</strong> z 3 2 1 na 1 2 3</span>
  <wje-grid>
    <wje-row>
      <wje-col order="3">3</wje-col>
      <wje-col order="2">2</wje-col>
      <wje-col order="1">1</wje-col>
    </wje-row>
  </wje-grid>

  <span>Stĺpec 2 presunieme na poziciu 4 a column 3 na poziciu 5</span>
  <wje-grid>
    <wje-row>
      <wje-col>1</wje-col>
      <wje-col order="4">2</wje-col>
      <wje-col order="5">3</wje-col>
      <wje-col>4</wje-col>
      <wje-col>5</wje-col>
      <wje-col>6</wje-col>
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
