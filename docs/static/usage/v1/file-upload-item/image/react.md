```tsx
import React from 'react';
import { FileUploadItem, Image } from '@elements/react';

function Example() {
  return (
    <>
      <wje-file-upload-item name="tralala.png" size="1000000">
        <wje-img slot="img" src="https://picsum.photos/42/42?i=1"></wje-img>
      </wje-file-upload-item>
    </>
  );
}
export default Example;
```
