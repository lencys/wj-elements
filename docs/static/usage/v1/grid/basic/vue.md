```html
<template>
   <wje-grid>
      <wje-row>
        <wje-col>1</wje-col>
        <wje-col>2</wje-col>
        <wje-col>3</wje-col>
      </wje-row>
    </wje-grid>

    <wje-grid>
      <wje-row>
        <wje-col>1</wje-col>
        <wje-col>2</wje-col>
        <wje-col>3</wje-col>
        <wje-col>4</wje-col>
        <wje-col>5</wje-col>
        <wje-col>6</wje-col>
      </wje-row>
    </wje-grid>

    <wje-grid>
      <wje-row>
        <wje-col>1</wje-col>
        <wje-col>2</wje-col>
        <wje-col>3</wje-col>
        <wje-col>4</wje-col>
        <wje-col>5</wje-col>
        <wje-col>6</wje-col>
        <wje-col>7</wje-col>
        <wje-col>8</wje-col>
        <wje-col>9</wje-col>
        <wje-col>10</wje-col>
        <wje-col>11</wje-col>
        <wje-col>12</wje-col>
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
