```html
<template>
  <wj-label>Ikony na začiatku</wj-label>
  <wj-breadcrumbs>
    <wj-breadcrumb href="/house">
      <wj-icon slot="start" name="home"></wj-icon>
      Home
    </wj-breadcrumb>
    <wj-breadcrumb href="/electronics">
      <wj-icon slot="start" name="bolt"></wj-icon>
      Electronics
    </wj-breadcrumb>
    <wj-breadcrumb href="/cameras">
      <wj-icon slot="start" name="camera"></wj-icon>
      Cameras
    </wj-breadcrumb>
    <wj-breadcrumb href="/film">
      <wj-icon slot="start" name="video"></wj-icon>
      Film
    </wj-breadcrumb>
  </wj-breadcrumbs>

  <wj-label>Ikony na konci</wj-label>
  <wj-breadcrumbs>
    <wj-breadcrumb href="/house">
      Home
      <wj-icon slot="end" name="home"></wj-icon>
    </wj-breadcrumb>
    <wj-breadcrumb href="/electronics">
      Electronics
      <wj-icon slot="end" name="bolt"></wj-icon>
    </wj-breadcrumb>
    <wj-breadcrumb href="/cameras">
      Cameras
      <wj-icon slot="end" name="camera"></wj-icon>
    </wj-breadcrumb>
    <wj-breadcrumb href="/film">
      Film
      <wj-icon slot="end" name="video"></wj-icon>
    </wj-breadcrumb>
  </wj-breadcrumbs>
</template>

<script lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Breadcrumb, Breadcrumbs, Icon, Label }
  });
</script>
```
