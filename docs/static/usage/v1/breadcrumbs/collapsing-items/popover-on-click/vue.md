```html
<template>
  <wj-breadcrumbs max-items="4" items-before-collapse="2" collapsed-variant="dropdown">
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
