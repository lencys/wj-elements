```html
<wj-grid>
  <wj-row class="gx-2">
    <wj-col size="6">
      <wj-input label="Project name"></wj-input>
    </wj-col>
    <wj-col size="6">
      <wj-input label="Project code" placeholder="6 digit code" minlength="6" maxlength="6" message="Toto je moja hlaska" validate-on-change custom-error-display></wj-input>
    </wj-col>
  </wj-row>
  <wj-row>
    <wj-col size="12">
      <wj-input label="Project URL">
        <span slot="start"><wj-icon name="globe"></wj-icon></span>
        <span slot="end">.com</span>
      </wj-input>
    </wj-col>
  </wj-row>
  <wj-row class="gx-2">
    <wj-col size="6">
      <wj-input label="Profit">
        <span slot="end">&euro;</span>
      </wj-input>
    </wj-col>
    <wj-col size="6">
      <wj-input label="Email"></wj-input>
    </wj-col>
  </wj-row>
</wj-grid>

<script lang="ts">
  import {Input, Grid, Row, Col} from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Input, Grid, Row, Col },
  });
</script>
```
