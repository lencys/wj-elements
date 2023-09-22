```html
<template>
  <wj-progress-bar progress="60" radius="20" stroke="3" color="danger" type="circle" shadow="open" class="wj-color-danger wj-color">
    <wj-thumbnail shadow="open">
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg">
    </wj-thumbnail>
    <style>
      wj-thumbnail {
        --wj-border-radius: 50%;
        --wj-thumbnail-width: 38px;
        --wj-thumbnail-height: 38px;
      }
    </style>
  </wj-progress-bar>
</template>

<script lang="ts">
  import { ProgressBar, Thumbnail } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { ProgressBar, , Thumbnail },
  });
</script>
```
