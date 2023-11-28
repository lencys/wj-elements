```html
<template>
  <wj-img-comparer>
    <wj-img src="./../../../../img/example-image.svg" slot="before"></wj-img>
    <wj-img src="./../../../../img/example-image2.svg" slot="after"></wj-img>
  </wj-img-comparer>
</template>

<script lang="ts">
  import { Img, ImgComparer } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Img, ImgComparer },
  });
</script>
```
