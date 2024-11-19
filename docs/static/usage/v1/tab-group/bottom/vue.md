```html
<template>
  <wje-card>
    <wje-tab-group variant="bottom">
      <wje-tab slot="nav" panel="general">General</wje-tab>
      <wje-tab slot="nav" panel="custom" active>Custom</wje-tab>
      <wje-tab slot="nav" panel="advanced">Advanced</wje-tab>
      <wje-tab slot="nav" panel="disabled" disabled>Disabled</wje-tab>

      <wje-tab-panel name="general">This is the general tab panel.</wje-tab-panel>
      <wje-tab-panel name="custom">This is the custom tab panel.</wje-tab-panel>
      <wje-tab-panel name="advanced">This is the advanced tab panel.</wje-tab-panel>
      <wje-tab-panel name="disabled">This is a disabled tab panel.</wje-tab-panel>
    </wje-tab-group>
  </wje-card>
</template>

<script lang="ts">
  import { TabGroup, Tab, Card } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { TabGroup, Tab, Card },
  });
</script>
```
