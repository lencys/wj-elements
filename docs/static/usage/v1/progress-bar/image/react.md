```tsx
import React from 'react';
import { ProgressBar, Thumbnail } from '@elemets/react';
function Example() {
  return (
  <wje-progress-bar progress="60" radius="20" stroke="3" color="danger" type="circle" shadow="open" class="wje-color-danger wje-color">
    <wje-thumbnail circle>
      <img alt="Silhouette of mountains" src="../../../../img/demos/thumbnail.svg">
    </wje-thumbnail>
    <style>
    wje-thumbnail {
        --wje-border-radius: 50%;
        --wje-thumbnail-width: 38px;
        --wje-thumbnail-height: 38px;
    }
    </style>
  </wje-progress-bar>
  );
}
export default Example;
```
