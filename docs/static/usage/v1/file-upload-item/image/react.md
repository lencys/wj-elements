```tsx
import React from 'react';
import { FileUploadItem, Image } from '@elements/react';

function Example() {
  return (
    <>
      <wj-file-upload-item name="tralala.png" size="1000000">
        <wj-img slot="img" src="https://picsum.photos/42/42?i=1"></wj-img>
      </wj-file-upload-item>
    </>
  );
}
export default Example;
```
