```html
<template>
  <wj-list>
    <wj-item shadow="open" class="wj-item-list">
      <wj-label shadow="open">Default</wj-label>
      <wj-badge shadow="open">22k</wj-badge>
    </wj-item>
    <wj-item shadow="open" class="wj-item-list">
      <wj-label shadow="open">Followers</wj-label>
      <wj-badge color="primary" shadow="open" class="wj-color-primary wj-color">22k</wj-badge>
    </wj-item>
    <wj-item shadow="open" class="wj-item-list">
      <wj-label shadow="open">Likes</wj-label>
      <wj-badge color="complete" shadow="open" class="wj-color-complete wj-color">118k</wj-badge>
    </wj-item>
    <wj-item shadow="open" class="wj-item-list">
      <wj-label shadow="open">Completed</wj-label>
      <wj-badge color="success" shadow="open" class="wj-color-success wj-color">34k</wj-badge>
    </wj-item>
    <wj-item shadow="open" class="wj-item-list">
      <wj-label shadow="open">Stars</wj-label>
      <wj-badge color="warning" shadow="open" class="wj-color-warning wj-color">80</wj-badge>
    </wj-item>
    <wj-item shadow="open" class="wj-item-list">
      <wj-label shadow="open">Warnings</wj-label>
      <wj-badge color="danger" shadow="open" class="wj-color-danger wj-color">70</wj-badge>
    </wj-item>
    <wj-item shadow="open" class="wj-item-list">
      <wj-label shadow="open">Notifications</wj-label>
      <wj-badge color="info" shadow="open" class="wj-color-info wj-color">1000</wj-badge>
    </wj-item>
    <wj-item shadow="open" class="wj-item-list">
      <wj-label shadow="open">Notifications</wj-label>
      <wj-badge color="menu" shadow="open" class="wj-color-menu wj-color">1000</wj-badge>
    </wj-item>
  </wj-list>
</template>

<script lang="ts">
  import { Badge, Item, Label, List } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Badge, Item, Label, List },
  });
</script>
```
