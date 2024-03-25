```html
<template>
  <wje-item>
    <wje-avatar slot="start">
      <wje-img alt="Silhouette of a person's head" src="/assets/img/avatar.svg"></wje-img>
    </wje-avatar>
    <wje-label> Avatar Item </wje-label>
  </wje-item>

  <wje-item>
    <wje-thumbnail slot="start">
      <wje-img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg"></wje-img>
    </wje-thumbnail>
    <wje-label> Thumbnail Item </wje-label>
  </wje-item>
</template>

<script lang="ts">
  import { Item, Label, Avatar, Image, Thumbnail } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Item, Label, Avatar, Image, Thumbnail },
  });
</script>
```
