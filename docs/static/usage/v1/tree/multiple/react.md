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
	<wje-tree selection="multiple">
		<wje-tree-item>
			Deciduous
			<wje-tree-item>Birch</wje-tree-item>
			<wje-tree-item>
				Maple
				<wje-tree-item>Field maple</wje-tree-item>
				<wje-tree-item>Red maple</wje-tree-item>
				<wje-tree-item>Sugar maple</wje-tree-item>
			</wje-tree-item>
			<wje-tree-item>Oak</wje-tree-item>
		</wje-tree-item>
		<wje-tree-item>
			Coniferous
			<wje-tree-item>Cedar</wje-tree-item>
			<wje-tree-item>Pine</wje-tree-item>
			<wje-tree-item>Spruce</wje-tree-item>
		</wje-tree-item>
		<wje-tree-item>
			Non-trees
			<wje-tree-item>Bamboo</wje-tree-item>
			<wje-tree-item>Cactus</wje-tree-item>
			<wje-tree-item>Fern</wje-tree-item>
		</wje-tree-item>
	</wje-tree>
  );
}

export default Example;
```
