```html
<template>
  <wj-container vertical>
    <wj-header>Header</wj-header>
    <wj-main>Main</wj-main>
  </wj-container>

  <wj-container vertical>
    <wj-header>Header</wj-header>
    <wj-main>Main</wj-main>
    <wj-footer>Footer</wj-footer>
  </wj-container>

  <wj-container>
    <wj-aside width="200px">Aside</wj-aside>
    <wj-main>Main</wj-main>
  </wj-container>

  <wj-container vertical>
    <wj-header>Header</wj-header>
    <wj-container>
      <wj-aside width="200px">Aside</wj-aside>
      <wj-main>Main</wj-main>
    </wj-container>
  </wj-container>

  <wj-container vertical>
    <wj-header>Header</wj-header>
    <wj-container>
      <wj-aside width="200px">Aside</wj-aside>
      <wj-container vertical>
        <wj-main>Main</wj-main>
        <wj-footer>Footer</wj-footer>
      </wj-container>
    </wj-container>
  </wj-container>

  <wj-container>
    <wj-aside width="200px">Aside</wj-aside>
    <wj-container vertical>
      <wj-header>Header</wj-header>
      <wj-main>Main</wj-main>
    </wj-container>
  </wj-container>

  <wj-container>
    <wj-aside width="200px">Aside</wj-aside>
    <wj-container vertical>
      
      <wj-header>Header</wj-header>
      <wj-container>
        <wj-aside width="200px">Aside</wj-aside>
        <wj-aside width="200px">Aside</wj-aside>
        <wj-main>Main</wj-main>
        
      </wj-container>
      
      <wj-footer>Footer</wj-footer>
    </wj-container>
  </wj-container>
</template>

<script lang="ts">
  import { Container, Header, Footer, Aside } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Container, Header, Footer, Aside },
  });
</script>
```
