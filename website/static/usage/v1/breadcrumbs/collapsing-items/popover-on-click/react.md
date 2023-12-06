```tsx
import React, { useRef, useState } from 'react';
import { Breadcrumb, Breadcrumbs, Content, Item, Label, List, Popover } from '@elements/react';

function Example() {
  const popover = useRef<HTMLIonPopoverElement>(null);
  const [collapsedBreadcrumbs, setCollapsedBreadcrumbs] = useState<HTMLIonBreadcrumbElement[]>([]);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = (e: Event) => {
    setCollapsedBreadcrumbs((e as CustomEvent).detail.collapsedBreadcrumbs);
    popover.current!.event = e;
    setPopoverOpen(true);
  };

  return (
    <>
     <wj-breadcrumbs max-items="4" items-before-collapse="2" collapsed-variant="dropdown">
      <wj-breadcrumb href="/home">Home</wj-breadcrumb>
      <wj-breadcrumb href="/electronics">Electronics</wj-breadcrumb>
      <wj-breadcrumb href="/photography">Photography</wj-breadcrumb>
      <wj-breadcrumb href="/cameras">Cameras</wj-breadcrumb>
      <wj-breadcrumb href="/film">Film</wj-breadcrumb>
      <wj-breadcrumb href="/35mm">35 mm</wj-breadcrumb>
      <wj-breadcrumb href="/a">A</wj-breadcrumb>
      <wj-breadcrumb href="/b">B</wj-breadcrumb>
      <wj-breadcrumb href="/c">C</wj-breadcrumb>
    </wj-breadcrumbs>
    </>
  );
}
export default Example;
```
