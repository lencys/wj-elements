```html
<template>
  <wj-item>
    <wj-avatar slot="start">
      <wj-img alt="Silhouette of a person's head" src="/assets/img/avatar.svg"></wj-img>
    </wj-avatar>
    <wj-label> Avatar Item </wj-label>
  </wj-item>

  <wj-item>
    <wj-thumbnail slot="start">
      <wj-img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg"></wj-img>
    </wj-thumbnail>
    <wj-label> Thumbnail Item </wj-label>
  </wj-item>
</template>

<script lang="ts">
  import { Item, Label, Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Item, Label, Button },
  });
</script>
```
