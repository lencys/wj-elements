```html
<template>
    <wje-stepper active="primary" done="success">
        <wje-step active>
            Content 1
        </wje-step>
        <wje-step label="Step 2">
            Content 2
        </wje-step>
        <wje-step label="Step 3" disabled>
            Content 3
        </wje-step>
    </wje-stepper>
</template>

<script lang="ts">
  import { Stepper, Step } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Stepper, Step },
  });
</script>
```
