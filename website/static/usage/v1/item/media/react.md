```tsx
import React from 'react';
import { Item, Label, Avatar, Image, Thumbnail } from '@elements/react';

function Example() {
  return (
    <>
    <wj-item>
      <wj-avatar slot="start">
        <wj-img alt="Silhouette of a person's head" src="/assets/img/avatar.svg"></wj-img>
      </wj-avatar>
      <wj-label> Avatar Item </wj-label>
    </wj-item>

    <wj-item>
      <wj-thumbnail slot="start">
        <wj-img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg"></wj-img>
      </wj-thumbnail>
      <wj-label> Thumbnail Item </wj-label>
    </wj-item>
</>
  );
}
export default Example;
```
