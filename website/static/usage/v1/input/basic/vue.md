```html
<wj-input label="Základný input"></wj-input>
<wj-input label="Input s placeholderom" placeholder="Enter company name"></wj-input>
<wj-input label="Input s predvyplnenou hodnotou" value="Mlynské Nivy 71"></wj-input>
<wj-input label="Input iba na čítanie" value="Bratislava" readonly></wj-input>
<wj-input label="Vypnutý input" value="84103" disabled></wj-input>
<wj-input label="Povinný input s typom number a custom chybovou hláškou" type="number" minlength="5" message="Toto je moja chybová hláška" required validate-on-change custom-error-display ></wj-input>

<script lang="ts">
  import Input from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: Input,
  });
</script>
```
