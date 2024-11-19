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
      <wje-breadcrumbs max-items="4" items-before-collapse="2" collapsed-variant="dropdown">
        <wje-breadcrumb href="/home">Home</wje-breadcrumb>
        <wje-breadcrumb href="/electronics">Electronics</wje-breadcrumb>
        <wje-breadcrumb href="/photography">Photography</wje-breadcrumb>
        <wje-breadcrumb href="/cameras">Cameras</wje-breadcrumb>
        <wje-breadcrumb href="/film">Film</wje-breadcrumb>
        <wje-breadcrumb href="/35mm">35 mm</wje-breadcrumb>
        <wje-breadcrumb href="/a">A</wje-breadcrumb>
        <wje-breadcrumb href="/b">B</wje-breadcrumb>
        <wje-breadcrumb href="/c">C</wje-breadcrumb>
      </wje-breadcrumbs>
    </>
  );
}
export default Example;
```
