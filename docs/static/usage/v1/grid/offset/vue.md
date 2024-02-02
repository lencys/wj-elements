```html
<template>
  <span>Stĺpec 2 má <strong>offset</strong> nastavený na <strong>"3"</strong></span>
  <wj-grid>
    <wj-row>
      <wj-col>1</wj-col>
      <wj-col offset="3">2</wj-col>
      <wj-col>3</wj-col>
    </wj-row>
  </wj-grid>

  <span>Stĺpec 5 má <strong>offset</strong> nastavený na <strong>"2"</strong></span>
  <wj-grid>
    <wj-row>
      <wj-col>1</wj-col>
      <wj-col>2</wj-col>
      <wj-col>3</wj-col>
      <wj-col>4</wj-col>
      <wj-col offset="2">5</wj-col>
    </wj-row>
  </wj-grid>

  <span>Stĺpec 1 má <strong>offset</strong> nastavený na <strong>"4"</strong></span>
  <wj-grid>
    <wj-row>
      <wj-col size="2" offset="4">1</wj-col>
      <wj-col size="2">2</wj-col>
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
