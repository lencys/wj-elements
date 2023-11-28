```html
 <wj-breadcrumbs>
    <wj-breadcrumb href="/home">
      Home
      <wj-icon slot="separator" name="slash"></wj-icon>
    </wj-breadcrumb>
    <wj-breadcrumb href="/electronics">
      Electronics
      <wj-icon slot="separator" name="slash"></wj-icon>
    </wj-breadcrumb>
    <wj-breadcrumb href="/cameras">
      Cameras
      <wj-icon slot="separator" name="slash"></wj-icon>
    </wj-breadcrumb>
    <wj-breadcrumb href="/film">
      Film
      <wj-icon slot="separator" name="slash"></wj-icon>
    </wj-breadcrumb>
  </wj-breadcrumbs>
</template>

<script lang="ts">
  import { Breadcrumb, Breadcrumbs } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Breadcrumb, Breadcrumbs },
  });
</script>
```
