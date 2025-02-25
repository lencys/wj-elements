```html
<template>
    <wje-avatar label="Petr Rahman" status-placement="top-start" initials>
      <wje-status color="success" slot="status">
        <wje-icon name="check" size="2x-small"></wje-icon>
      </wje-status>
        </wje-avatar>
        <wje-avatar label="Petr Rahman" status-placement="top-end" initials>
      <wje-status color="success" slot="status">
        <wje-icon name="check" size="2x-small"></wje-icon>
      </wje-status>
          </wje-avatar>
          <wje-avatar label="Petr Rahman" status-placement="bottom-start" initials>
      <wje-status color="success" slot="status">
        <wje-icon name="check" size="2x-small"></wje-icon>
      </wje-status>
        </wje-avatar>
        <wje-avatar label="Petr Rahman" status-placement="bottom-end" initials>
      <wje-status color="success" slot="status">
        <wje-icon name="check" size="2x-small"></wje-icon>
      </wje-status>
    </wje-avatar>
</template>

<script lang="ts">
  import { Avatar, Status } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Avatar, Status },
  });
</script>
```
