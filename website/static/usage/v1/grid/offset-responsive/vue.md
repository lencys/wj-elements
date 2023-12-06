```html
<template>
  <span>Žiadny offset pre breakpoint xs, posun 1. stĺpca pre sm a vyššie</span>
  <wj-grid>
    <wj-row>
      <wj-col offset-sm="2">1</wj-col>
      <wj-col>2</wj-col>
      <wj-col>3</wj-col>
      <wj-col>4</wj-col>
      <wj-col>5</wj-col>
    </wj-row>
  </wj-grid>

  <span>Žiadny offset pre breakpoint xs, offset posledných 3 stĺpcov pre md a vyššie</span>
  <wj-grid>
    <wj-row>
      <wj-col>1</wj-col>
      <wj-col offset-md="2">2</wj-col>
      <wj-col offset-md="2">3</wj-col>
      <wj-col offset-md="2">4</wj-col>
    </wj-row>
  </wj-grid>

  <span>Offset všetkých stĺpcov o 6 pre breakpoint xs, offset o 4 pre md, offset o 2 pre lg a vyššie</span>
  <wj-grid>
    <wj-row wrap>
      <wj-col offset="6" offset-md="4" offset-lg="2">1</wj-col>
      <wj-col offset="6" offset-md="4" offset-lg="2">2</wj-col>
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
