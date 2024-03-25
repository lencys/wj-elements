```html
<template>
  <wje-breadcrumbs>
    <wje-breadcrumb href="/house">Home</wje-breadcrumb>
    <wje-breadcrumb href="/electronics">Electronics</wje-breadcrumb>
    <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
    <wje-breadcrumb href="/film">Film</wje-breadcrumb>
  </wje-breadcrumbs>
</template>

<script lang="ts">
  import { Breadcrumb, Breadcrumbs } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Breadcrumb, Breadcrumbs },
  });
</script>
```
