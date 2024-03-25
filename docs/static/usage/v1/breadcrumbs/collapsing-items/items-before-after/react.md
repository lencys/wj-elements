```tsx
import React from 'react';
import { Breadcrumb, Breadcrumbs } from '@elements/react';
function Example() {
  return (
    <wje-breadcrumbs max-items="4" items-before-collapse="2">
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
    <wje-label>Počet položiek po zbaľovači</wje-label>
    <wje-breadcrumbs max-items="4" items-after-collapse="2">
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
  );
}
export default Example;
```
