```html
<template>
  <wje-label>Ikony na začiatku</wje-label>
  <wje-breadcrumbs>
    <wje-breadcrumb href="/house">
      <wje-icon slot="start" name="home"></wje-icon>
      Home
    </wje-breadcrumb>
    <wje-breadcrumb href="/electronics">
      <wje-icon slot="start" name="bolt"></wje-icon>
      Electronics
    </wje-breadcrumb>
    <wje-breadcrumb href="/cameras">
      <wje-icon slot="start" name="camera"></wje-icon>
      Cameras
    </wje-breadcrumb>
    <wje-breadcrumb href="/film">
      <wje-icon slot="start" name="video"></wje-icon>
      Film
    </wje-breadcrumb>
  </wje-breadcrumbs>

  <wje-label>Ikony na konci</wje-label>
  <wje-breadcrumbs>
    <wje-breadcrumb href="/house">
      Home
      <wje-icon slot="end" name="home"></wje-icon>
    </wje-breadcrumb>
    <wje-breadcrumb href="/electronics">
      Electronics
      <wje-icon slot="end" name="bolt"></wje-icon>
    </wje-breadcrumb>
    <wje-breadcrumb href="/cameras">
      Cameras
      <wje-icon slot="end" name="camera"></wje-icon>
    </wje-breadcrumb>
    <wje-breadcrumb href="/film">
      Film
      <wje-icon slot="end" name="video"></wje-icon>
    </wje-breadcrumb>
  </wje-breadcrumbs>
</template>

<script lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Breadcrumb, Breadcrumbs, Icon, Label }
  });
</script>
```
