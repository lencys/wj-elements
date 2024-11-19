```html
<template>
  <wje-button-group style="margin-right: 1rem;">
    <wje-tooltip content="Bold">
      <wje-button>
        <wje-icon slot="icon-only" name="bold"></wje-icon>
      </wje-button>
    </wje-tooltip>
    <wje-tooltip content="Italic">
      <wje-button>
        <wje-icon slot="icon-only" name="italic"></wje-icon>
      </wje-button>
    </wje-tooltip>
    <wje-tooltip content="Bold">
      <wje-button>
        <wje-icon slot="icon-only" name="underline"></wje-icon>
      </wje-button>
    </wje-tooltip>
  </wje-button-group>
  <wje-button-group>
    <wje-tooltip content="Align left">
      <wje-button>
        <wje-icon slot="icon-only" name="align-left"></wje-icon>
      </wje-button>
    </wje-tooltip>
    <wje-tooltip content="Align center">
      <wje-button>
        <wje-icon slot="icon-only" name="align-center"></wje-icon>
      </wje-button>
    </wje-tooltip>
    <wje-tooltip content="Align right">
      <wje-button>
        <wje-icon slot="icon-only" name="align-right"></wje-icon>
      </wje-button>
    </wje-tooltip>
    <wje-tooltip content="Align justify">
      <wje-button>
        <wje-icon slot="icon-only" name="align-justified"></wje-icon>
      </wje-button>
    </wje-tooltip>
  </wje-button-group>
</template>

<script lang="ts">
  import { Button, ButtonGroup, Icon, Tooltip } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Button, ButtonGroup, Icon, Tooltip },
  });
</script>
```
