```tsx
import React from 'react';
import { ProgressBar, Thumbnail } from '@elemets/react';
function Example() {
  return (
    <wj-progress-bar progress="60" radius="20" stroke="3" color="danger" type="circle" shadow="open" class="wj-color-danger wj-color">
      <wj-thumbnail shadow="open">
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg">
      </wj-thumbnail>
      <style>
        wj-thumbnail {
        --wj-border-radius: 50%;
        --wj-thumbnail-width: 38px;
        --wj-thumbnail-height: 38px;
      }
      </style>
    </wj-progress-bar>
  );
}
export default Example;
```
