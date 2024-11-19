```html
<template>
  <wje-toolbar>
    <wje-breadcrumbs slot="start" max-items="3" items-before-collapse="1" routerlinks>
      <wje-breadcrumb route="">
        <wje-icon slot="start" name="home"></wje-icon>
        <wje-icon slot="separator" name="minus" size="small" class="custom"></wje-icon>
      </wje-breadcrumb>
      ${this.breadcrumbs.map((breadcrumb) => { return `<wje-breadcrumb route="${breadcrumb.name}">
        ${breadcrumb.text}
        <wje-icon slot="separator" name="minus" size="small" class="custom"></wje-icon> </wje-breadcrumb
      >`; }).join("")}
      <style>
        .custom {
          --wje-icon-size: 10px;
        }
      </style>
    </wje-breadcrumbs>
    <wje-toolbar-action slot="end">
      <wje-button>Create</wje-button>
      <wje-button>Read</wje-button>
      <wje-button>Update</wje-button>
      <wje-button>Delete</wje-button>
    </wje-toolbar-action>
  </wje-toolbar>
</template>

<script lang="ts">
  import { Toolbar, ToolbarAction, Breadcrumbs, Breadcrumb, Button, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Toolbar, ToolbarAction, Breadcrumbs, Breadcrumb, Button, Icon },
  });
</script>
```
