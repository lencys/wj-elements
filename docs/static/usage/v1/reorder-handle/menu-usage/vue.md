```html
<wje-menu active>
    <wje-menu-item>
        <wje-reorder-handle dropzone="wje-menu" parent="wje-menu-item" slot="start">
            <wje-icon name="arrows-move"></wje-icon>
        </wje-reorder-handle>
        Item 1
    </wje-menu-item>
    <wje-menu-item>
        <wje-reorder-handle dropzone="wje-menu" slot="start">
            <wje-icon name="arrows-move"></wje-icon>
        </wje-reorder-handle>
        Item 2
    </wje-menu-item>
    <wje-menu-item>
        <wje-reorder-handle slot="start">
            <wje-icon name="arrows-move"></wje-icon>
        </wje-reorder-handle>
        Item 3 (no dropzone)
    </wje-menu-item>
    <wje-menu-item>
        <wje-reorder-handle slot="start">
            <wje-icon name="arrows-move"></wje-icon>
        </wje-reorder-handle>
        Item 4 (no dropzone)
    </wje-menu-item>
    <wje-menu-item>
        <wje-reorder-handle slot="start">
            <wje-icon name="arrows-move"></wje-icon>
        </wje-reorder-handle>
        Item 5 (no dropzone)
    </wje-menu-item>
    <wje-menu-item>
        <wje-reorder-handle dropzone="wje-menu" parent="wje-menu-item" slot="start">
            <wje-icon name="arrows-move"></wje-icon>
        </wje-reorder-handle>
        Item 6
    </wje-menu-item>
    <wje-menu-item>
        <wje-reorder-handle dropzone="wje-menu" slot="start">
            <wje-icon name="arrows-move"></wje-icon>
        </wje-reorder-handle>
        Submenu item
        <wje-menu slot="submenu">
            <wje-menu-item>Menu item</wje-menu-item>
            <wje-menu-item>Submenu item</wje-menu-item>
        </wje-menu>
    </wje-menu-item>
</wje-menu>

<script lang="ts">
  import { Reorder } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Reorder },
  });
</script>
```
