```tsx
import React from 'react';
import { FileUploadItem, Icon } from '@elements/react';

function Example() {
  return (
    <>
      <wje-file-upload-item name="tralala.png" size="1000000" uploaded="500000" progress="50" lang="sk">
        <wje-icon slot="img" name="video" size="large"></wje-icon>
      </wje-file-upload-item>
    </>
  );
}
export default Example;
```
