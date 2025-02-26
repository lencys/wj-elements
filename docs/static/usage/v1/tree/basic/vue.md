```html
<template>
	<wje-tree>
		<wje-tree-item expanded>
			Deciduous
			<wje-tree-item slot="children">Birch</wje-tree-item>
			<wje-tree-item expanded slot="children">
			Maple
			<wje-tree-item slot="children">Field maple</wje-tree-item>
			<wje-tree-item slot="children">Red maple</wje-tree-item>
			<wje-tree-item slot="children">Sugar maple</wje-tree-item>
			<wje-icon name="chevron-right" slot="expand"></wje-icon>
			<wje-icon name="chevron-down" slot="collapse"></wje-icon>
			</wje-tree-item>
			<wje-tree-item slot="children">Oak</wje-tree-item>
			<wje-icon name="chevron-right" slot="expand"></wje-icon>
			<wje-icon name="chevron-down" slot="collapse"></wje-icon>
		</wje-tree-item>
		<wje-tree-item>
			Coniferous
			<wje-tree-item slot="children">Cedar</wje-tree-item>
			<wje-tree-item slot="children">Pine</wje-tree-item>
			<wje-tree-item slot="children">Spruce</wje-tree-item>
			<wje-icon name="chevron-right" slot="expand"></wje-icon>
			<wje-icon name="chevron-down" slot="collapse"></wje-icon>
		</wje-tree-item>
		<wje-tree-item>
			Non-trees
			<wje-tree-item slot="children">Bamboo</wje-tree-item>
			<wje-tree-item slot="children">Cactus</wje-tree-item>
			<wje-tree-item slot="children">Fern</wje-tree-item>
			<wje-icon name="chevron-right" slot="expand"></wje-icon>
			<wje-icon name="chevron-down" slot="collapse"></wje-icon>
		</wje-tree-item>
	</wje-tree>
</template>

<script lang="ts">
  import { Tree, TreeItem, Icon } from '@elements/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { Tree, TreeItem, Icon },
  });
</script>
```
