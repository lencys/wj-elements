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
	<wje-tree>
		<template>
			<wje-icon name="grip-vertical" slot="start"></wje-icon>

			<wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible id="custom-dropdown-basic" slot="end">
			<wje-button size="large" slot="trigger" stop-propagation="true" caret>Large</wje-button>
			<wje-menu variant="context">
				<wje-menu-item>
					<wje-icon name="plane" slot="start"></wje-icon>
					<wje-label>Menu item</wje-label>
				</wje-menu-item>
			</wje-menu>
		</wje-dropdown>
		</template>
		<wje-tree-item expanded>
			<wje-icon name="folder" filled></wje-icon>
			Deciduous
			<wje-tree-item>
				<wje-icon name="folder" filled></wje-icon>
				Birch
			</wje-tree-item>
			<wje-tree-item expanded>
				<wje-icon name="folder" filled></wje-icon>
				Maple
				<wje-tree-item>
					<wje-icon name="folder" filled></wje-icon>
					Field maple
				</wje-tree-item>
				<wje-tree-item>
					<wje-icon name="folder" filled></wje-icon>
					Red maple
				</wje-tree-item>
				<wje-tree-item>
					<wje-icon name="folder" filled></wje-icon>
					Sugar maple
				</wje-tree-item>
			</wje-tree-item>
			<wje-tree-item>
				<wje-icon name="folder" filled></wje-icon>
				Oak
			</wje-tree-item>
		</wje-tree-item>
		<wje-tree-item>
			<wje-icon name="folder" filled></wje-icon>
			Coniferous
			<wje-tree-item>
				<wje-icon name="folder" filled></wje-icon>
				Cedar
			</wje-tree-item>
			<wje-tree-item>
				<wje-icon name="folder" filled></wje-icon>
				Pine
			</wje-tree-item>
			<wje-tree-item>
				<wje-icon name="folder" filled></wje-icon>
				Spruce
			</wje-tree-item>
		</wje-tree-item>
		<wje-tree-item>
			<wje-icon name="folder" filled></wje-icon>
			Non-trees
			<wje-tree-item>
				<wje-icon name="folder" filled></wje-icon>
				Bamboo
			</wje-tree-item>
			<wje-tree-item>
				<wje-icon name="folder" filled></wje-icon>
				Cactus
			</wje-tree-item>
			<wje-tree-item>
				<wje-icon name="folder" filled></wje-icon>
				Fern
			</wje-tree-item>
		</wje-tree-item>
	</wje-tree>
  );
}

export default Example;
```
