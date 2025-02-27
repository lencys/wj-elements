```html
<template>
    <wje-accordion multiple index="3">
        <wje-accordion-item color="info" class="collapsed">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
        </wje-accordion-item>
        <wje-accordion-item color="info" class="collapsed">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
        </wje-accordion-item>
        <wje-accordion-item color="info" class="collapsed">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
        </wje-accordion-item>
    </wje-accordion>
</template>

<script lang="ts">
  import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
        Accordion,
        AccordionItem
    },
  });
</script>
```
