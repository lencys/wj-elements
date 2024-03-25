```html
 <wje-breadcrumbs>
    <wje-breadcrumb href="/home">
      Home
      <wje-icon slot="separator" name="slash"></wje-icon>
    </wje-breadcrumb>
    <wje-breadcrumb href="/electronics">
      Electronics
      <wje-icon slot="separator" name="slash"></wje-icon>
    </wje-breadcrumb>
    <wje-breadcrumb href="/cameras">
      Cameras
      <wje-icon slot="separator" name="slash"></wje-icon>
    </wje-breadcrumb>
    <wje-breadcrumb href="/film">
      Film
      <wje-icon slot="separator" name="slash"></wje-icon>
    </wje-breadcrumb>
  </wje-breadcrumbs>
</template>

<script lang="ts">
  import { Breadcrumb, Breadcrumbs } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Breadcrumb, Breadcrumbs },
  });
</script>
```
