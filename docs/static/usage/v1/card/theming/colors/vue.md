```html
<template>
  <wje-card color="primary">
    <wje-card-header>
      <wje-card-subtitle>Primary</wje-card-subtitle>
      <wje-card-title>Title</wje-card-title>
    </wje-card-header>
    <wje-card-content> Content </wje-card-content>
  </wje-card>

  <wje-card color="complete">
    <wje-card-header>
      <wje-card-subtitle>Complete</wje-card-subtitle>
      <wje-card-title>Title</wje-card-title>
    </wje-card-header>
    <wje-card-content> Content </wje-card-content>
  </wje-card>

  <wje-card color="success">
    <wje-card-header>
      <wje-card-subtitle>Success</wje-card-subtitle>
      <wje-card-title>Title</wje-card-title>
    </wje-card-header>
    <wje-card-content> Content </wje-card-content>
  </wje-card>

  <wje-card color="warning">
    <wje-card-header>
      <wje-card-subtitle>Warning</wje-card-subtitle>
      <wje-card-title>Title</wje-card-title>
    </wje-card-header>
    <wje-card-content> Content </wje-card-content>
  </wje-card>

  <wje-card color="danger">
    <wje-card-header>
      <wje-card-subtitle>Danger</wje-card-subtitle>
      <wje-card-title>Title</wje-card-title>
    </wje-card-header>
    <wje-card-content> Content </wje-card-content>
  </wje-card>

  <wje-card color="info">
    <wje-card-header>
      <wje-card-subtitle>Info</wje-card-subtitle>
      <wje-card-title>Title</wje-card-title>
    </wje-card-header>
    <wje-card-content> Content </wje-card-content>
  </wje-card>

  <wje-card color="menu">
    <wje-card-header>
      <wje-card-subtitle>Menu</wje-card-subtitle>
      <wje-card-title>Title</wje-card-title>
    </wje-card-header>
    <wje-card-content> Content </wje-card-content>
  </wje-card>
</template>

<script lang="ts">
  import { Card, CardContent, CardHeader, CardSubtitle, CardTitle } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Card, CardContent, CardHeader, CardSubtitle, CardTitle },
  });
</script>
```
