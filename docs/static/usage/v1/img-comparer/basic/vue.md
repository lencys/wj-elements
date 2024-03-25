```html
<template>
  <wje-img-comparer>
    <wje-img src="./../../../../img/example-image.svg" slot="before"></wje-img>
    <wje-img src="./../../../../img/example-image2.svg" slot="after"></wje-img>
  </wje-img-comparer>
</template>

<script lang="ts">
  import { Img, ImgComparer } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Img, ImgComparer },
  });
</script>
```
