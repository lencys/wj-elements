```html
<template>
    <wj-animation name="heartBeat">
    <wj-avatar>
      <wj-img src="/assets/img/avatar.svg"></wj-img>
    </wj-avatar>
  </wj-animation>
  <div style="margin-top: 1rem">
    <wj-button id="stop">Stop</wj-button>
    <wj-button id="play">Play</wj-button>
  </div>
</template>

<script lang="ts">
  import { Animation, Avatar, Image, Button} from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Animation, Avatar, Image, Button},
  });
</script>
```
