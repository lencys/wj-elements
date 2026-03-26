```html
<template>
  <wje-animation name="heartBeat">
    <wje-avatar>
      <wje-img alt="Silhouette of a person's head" src="/img/demos/avatar.svg"></wje-img>
    </wje-avatar>
  </wje-animation>
  <div style="margin-top: 1rem">
    <wje-button id="stop">Stop</wje-button>
    <wje-button id="play">Play</wje-button>
  </div>
</template>

<script lang="ts">
  import { Animation, Avatar, Image, Button } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Animation, Avatar, Image, Button },
  });
</script>
```
