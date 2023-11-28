```html
<template>
  <wj-avatar size="small">
    <wj-img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </wj-avatar>
  <wj-avatar>
    <wj-img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </wj-avatar>
  <wj-avatar size="large">
    <wj-img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </wj-avatar>
</template>

<script lang="ts">
  import { Avatar, Image } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar, Image },
  });
</script>
```
