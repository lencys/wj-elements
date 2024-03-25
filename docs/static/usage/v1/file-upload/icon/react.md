```tsx
import React from 'react';
import { FileUpload, Icon } from '@elements/react';

function Example() {
  return (
    <>
    <wje-file-upload max-file-size="10000" accepted-types="mp4" icon>
      <wje-icon name="cloud-upload" style="--wje-icon-size: 4rem;"></wje-icon>
      <p>Drag and drop to upload</p>
    </wje-file-upload>
    </>
  );
}
export default Example;
```
