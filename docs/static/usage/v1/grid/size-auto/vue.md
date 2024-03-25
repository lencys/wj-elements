```html
<template>
  <span>Stĺpec 1 má <strong>size</strong> nastavenú na <strong>"auto"</strong></span>
  <wje-grid>
    <wje-row>
      <wje-col size="auto">1</wje-col>
      <wje-col>2</wje-col>
      <wje-col>3</wje-col>
    </wje-row>
  </wje-grid>

  <span>Stĺpec 3 obsahuje text a má <strong>size "auto"</strong></span>
  <wje-grid>
    <wje-row>
      <wje-col>1</wje-col>
      <wje-col>2</wje-col>
      <wje-col size="auto">Som stĺpec 3</wje-col>
      <wje-col>4</wje-col>
      <wje-col>5</wje-col>
      <wje-col>6</wje-col>
    </wje-row>
  </wje-grid>

  <span>Stĺpec 2 má <strong>size</strong> <strong>"auto"</strong> a definovanú šírku</span>
  <wje-grid>
    <wje-row>
      <wje-col>1</wje-col>
      <wje-col size="auto">
        <div style="width: 150px">2</div>
      </wje-col>
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
