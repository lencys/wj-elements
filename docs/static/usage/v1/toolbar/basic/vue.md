```html
<template>
  <wje-toolbar>
    <wje-breadcrumbs slot="start">
      <wje-breadcrumb href="/home"><wje-icon slot="start" name="home"></wje-icon></wje-breadcrumb>
      <wje-breadcrumb href="/photography">Photography</wje-breadcrumb>
      <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
      <wje-breadcrumb href="/film">Film</wje-breadcrumb>
      <wje-breadcrumb href="/35mm">35 mm</wje-breadcrumb>
    </wje-breadcrumbs>
    <wje-toolbar-action slot="end">
      <wje-button>Create</wje-button>
      <wje-button>Delete</wje-button>
    </wje-toolbar-action>
  </wje-toolbar>
</template>

<script lang="ts">
  import { Toolbar, ToolbarAction, Breadcrumbs, Breadcrumb, Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Toolbar, ToolbarAction, Breadcrumbs, Breadcrumb, Button },
  });
</script>
```
