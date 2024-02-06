```tsx
import React from 'react';
import { FileUploadItem, Icon } from '@elements/react';

function Example() {
  return (
    <>
      <wj-file-upload-item name="tralala.png" size="1000000" uploaded="500000" progress="50" lang="sk">
        <wj-icon slot="img" name="video" size="large"></wj-icon>
      </wj-file-upload-item>
    </>
  );
}
export default Example;
```
