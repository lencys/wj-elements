```html
<template>
  <wj-breadcrumbs max-items="4">
    <wj-breadcrumb href="/home">Home</wj-breadcrumb>
    <wj-breadcrumb href="/electronics">Electronics</wj-breadcrumb>
    <wj-breadcrumb href="/photography">Photography</wj-breadcrumb>
    <wj-breadcrumb href="/cameras">Cameras</wj-breadcrumb>
    <wj-breadcrumb href="/film">Film</wj-breadcrumb>
    <wj-breadcrumb href="/35mm">35 mm</wj-breadcrumb>
    <wj-breadcrumb href="/a">A</wj-breadcrumb>
    <wj-breadcrumb href="/b">B</wj-breadcrumb>
    <wj-breadcrumb href="/c">C</wj-breadcrumb>
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
