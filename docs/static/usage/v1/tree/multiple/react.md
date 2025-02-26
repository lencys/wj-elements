```tsx
import React, { useEffect, useRef } from 'react';
import '@elements/react'; // Ak treba explicitne importovať Web Components

function Example() {
  const treeRef = useRef(null);

  useEffect(() => {
    if (treeRef.current) {
      // Ak je potrebné manipulovať s Web Component
      treeRef.current.addEventListener('expand', (event) => {
        console.log('Expanded item:', event.detail);
      });
    }
  }, []);

  return (
	<wje-tree selection="multiple" ref={treeRef}>
		<wje-tree-item>
			Deciduous
			<wje-tree-item slot="children">Birch</wje-tree-item>
			<wje-tree-item slot="children">
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
  );
}

export default Example;
```
