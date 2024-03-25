```html
<template>
  <wje-breadcrumbs max-items="4" items-before-collapse="2" collapsed-variant="dropdown">
    <wje-breadcrumb href="/home">Home</wje-breadcrumb>
    <wje-breadcrumb href="/electronics">Electronics</wje-breadcrumb>
    <wje-breadcrumb href="/photography">Photography</wje-breadcrumb>
    <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
    <wje-breadcrumb href="/film">Film</wje-breadcrumb>
    <wje-breadcrumb href="/35mm">35 mm</wje-breadcrumb>
    <wje-breadcrumb href="/a">A</wje-breadcrumb>
    <wje-breadcrumb href="/b">B</wje-breadcrumb>
    <wje-breadcrumb href="/c">C</wje-breadcrumb>
  </wje-breadcrumbs>
</template>

<script lang="ts">
  import { Breadcrumb, Breadcrumbs, Content, Item, Label, List, Popover } from '@elements/vue';
  import Popover from './Popover.vue';

  export default {
    components: { Breadcrumb, Breadcrumbs, Content, Item, Label, List, Popover },
    data() {
      return {
        popoverOpen: false,
        collapsedBreadcrumbs: [],
        event: null,
      };
    },
    methods: {
      presentPopover(e: Event) {
        this.collapsedBreadcrumbs = (e as CustomEvent).detail.collapsedBreadcrumbs;
        this.event = e;
        this.popoverOpen = true;
      },
    },
  };
</script>
```
