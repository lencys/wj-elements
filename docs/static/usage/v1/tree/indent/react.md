```tsx
import React from 'react';
import '@elements/react';

function Example() {
  return (
    <>
      <wje-tree className="tree-indent">
        <wje-tree-item expanded>
          Deciduous
          <wje-tree-item>Birch</wje-tree-item>
          <wje-tree-item expanded>
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
      </wje-tree>

      <style>{`
        .tree-indent {
          --wje-tree-item-indent: 1.25rem;
          --wje-tree-item-indent-guid-width: 1px;
        }
      `}</style>
    </>
  );
}

export default Example;
```
