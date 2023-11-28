```tsx
import React from 'react';
import { Img, ImgComparer } from '@elements/react';

function Example() {
  return (
    <wj-img-comparer>
      <wj-img src="./../../../../img/example-image.svg" slot="before"></wj-img>
      <wj-img src="./../../../../img/example-image2.svg" slot="after"></wj-img>
    </wj-img-comparer>
  );
}
export default Example;
```
