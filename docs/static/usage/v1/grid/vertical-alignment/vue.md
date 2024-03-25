```html
<template>
  <span>Stĺpce zarovnané nahor</span>
  <wje-grid>
    <wje-row class="wje-align-items-start">
      <wje-col> 1 </wje-col>
      <wje-col> 2 </wje-col>
      <wje-col> 3 </wje-col>
      <wje-col>
        4 <br />
        # <br />
        # <br />
        # <br />
      </wje-col>
    </wje-row>
  </wje-grid>

  <span>Stĺpce zarovnané na stred</span>
  <wje-grid>
    <wje-row class="wje-align-items-center">
      <wje-col> 1 </wje-col>
      <wje-col> 2 </wje-col>
      <wje-col> 3 </wje-col>
      <wje-col>
        4 <br />
        # <br />
        # <br />
        # <br />
      </wje-col>
    </wje-row>
  </wje-grid>

  <span>Stĺpce zarovnané nadol</span>
  <wje-grid>
    <wje-row class="wje-align-items-end">
      <wje-col> 1 </wje-col>
      <wje-col> 2 </wje-col>
      <wje-col> 3 </wje-col>
      <wje-col>
        4 <br />
        # <br />
        # <br />
        # <br />
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
