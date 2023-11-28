```html
<template>
  <span>Columns aligned at the start</span>
  <wj-grid>
    <wj-row class="wj-justify-content-start">
      <wj-col size="3"> 1 </wj-col>
      <wj-col size="3"> 2 </wj-col>
    </wj-row>
  </wj-grid>
  
  <span>Stĺpce zarovnané na stred</span>
  <wj-grid>
    <wj-row class="wj-justify-content-center">
      <wj-col size="3"> 1 </wj-col>
      <wj-col size="3"> 2 </wj-col>
    </wj-row>
  </wj-grid>
  
  <span>Stĺpce zarovnané na koniec</span>
  <wj-grid>
    <wj-row class="wj-justify-content-end">
      <wj-col size="3"> 1 </wj-col>
      <wj-col size="3"> 2 </wj-col>
    </wj-row>
  </wj-grid>
  
  <span>Stĺpce zarovnané so space-around</span>
  <wj-grid>
    <wj-row class="wj-justify-content-around">
      <wj-col size="3"> 1 </wj-col>
      <wj-col size="3"> 2 </wj-col>
    </wj-row>
  </wj-grid>
  
  <span>Stĺpce zarovnané so space-between</span>
  <wj-grid>
    <wj-row class="wj-justify-content-between">
      <wj-col size="3"> 1 </wj-col>
      <wj-col size="3"> 2 </wj-col>
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
