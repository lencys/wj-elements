```html
<template>
  <p>
    <wje-button-group>
      <wje-button>Default</wje-button>
      <wje-button>Default</wje-button>
      <wje-button>Default</wje-button>
    </wje-button-group>
  </p>
  <p>
    <wje-button-group>
      <wje-button color="primary">Primary</wje-button>
      <wje-button color="primary">Primary</wje-button>
      <wje-button color="primary">Primary</wje-button>
    </wje-button-group>
  </p>
  <p>
    <wje-button-group>
      <wje-button color="complete">Complete</wje-button>
      <wje-button color="complete">Complete</wje-button>
      <wje-button color="complete">Complete</wje-button>
    </wje-button-group>
  </p>
  <p>
    <wje-button-group>
      <wje-button color="success">Success</wje-button>
      <wje-button color="success">Success</wje-button>
      <wje-button color="success">Success</wje-button>
    </wje-button-group>
  </p>
  <p>
    <wje-button-group>
      <wje-button color="warning">Warning</wje-button>
      <wje-button color="warning">Warning</wje-button>
      <wje-button color="warning">Warning</wje-button>
    </wje-button-group>
  </p>
  <p>
    <wje-button-group>
      <wje-button color="danger">Danger</wje-button>
      <wje-button color="danger">Danger</wje-button>
      <wje-button color="danger">Danger</wje-button>
    </wje-button-group>
  </p>
  <p>
    <wje-button-group>
      <wje-button color="neutral">Neutral</wje-button>
      <wje-button color="neutral">Neutral</wje-button>
      <wje-button color="neutral">Neutral</wje-button>
    </wje-button-group>
  </p>
</template>

<script lang="ts">
  import { Button, ButtonGroup } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, ButtonGroup },
  });
</script>
```
