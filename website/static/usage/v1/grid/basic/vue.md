```html
<template>
   <wj-grid>
      <wj-row>
        <wj-col>1</wj-col>
        <wj-col>2</wj-col>
        <wj-col>3</wj-col>
      </wj-row>
    </wj-grid>

    <wj-grid>
      <wj-row>
        <wj-col>1</wj-col>
        <wj-col>2</wj-col>
        <wj-col>3</wj-col>
        <wj-col>4</wj-col>
        <wj-col>5</wj-col>
        <wj-col>6</wj-col>
      </wj-row>
    </wj-grid>

    <wj-grid>
      <wj-row>
        <wj-col>1</wj-col>
        <wj-col>2</wj-col>
        <wj-col>3</wj-col>
        <wj-col>4</wj-col>
        <wj-col>5</wj-col>
        <wj-col>6</wj-col>
        <wj-col>7</wj-col>
        <wj-col>8</wj-col>
        <wj-col>9</wj-col>
        <wj-col>10</wj-col>
        <wj-col>11</wj-col>
        <wj-col>12</wj-col>
      </wj-row>
    </wj-grid>
</template>

<script>
  import { Col, Grid, Row } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Col, Grid, Row },
  });
</script>
```
