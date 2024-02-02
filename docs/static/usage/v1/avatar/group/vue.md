```html
<template>
  <div class="wj-avatar-group">
    <wj-avatar size="large">
      <wj-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wj-img>
    </wj-avatar>
    <wj-avatar size="large">
      <wj-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wj-img>
    </wj-avatar>
    <wj-avatar size="large">
      <wj-img src="https://ionicframework.com/docs/img/demos/avatar.svg"></wj-img>
    </wj-avatar>
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
