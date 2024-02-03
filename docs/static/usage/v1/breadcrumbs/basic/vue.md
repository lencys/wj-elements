```html
<template>
  <wj-breadcrumbs>
    <wj-breadcrumb href="/house">Home</wj-breadcrumb>
    <wj-breadcrumb href="/electronics">Electronics</wj-breadcrumb>
    <wj-breadcrumb href="/cameras">Cameras</wj-breadcrumb>
    <wj-breadcrumb href="/film">Film</wj-breadcrumb>
  </wj-breadcrumbs>
</template>

<script lang="ts">
  import { Breadcrumb, Breadcrumbs } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Breadcrumb, Breadcrumbs },
  });
</script>
```
