```html
<template>
  <wje-avatar>
    <wje-img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </wje-avatar>
</template>

<script lang="ts">
  import { Avatar, Image } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar, Image },
  });
</script>
```
