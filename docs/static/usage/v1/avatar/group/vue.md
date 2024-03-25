```html
<template>
  <div class="wje-avatar-group">
    <wje-avatar size="large">
      <wje-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wje-img>
    </wje-avatar>
    <wje-avatar size="large">
      <wje-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wje-img>
    </wje-avatar>
    <wje-avatar size="large">
      <wje-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wje-img>
    </wje-avatar>
  </div>
</template>

<script lang="ts">
  import { Avatar, Image } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar, Image },
  });
</script>
```
