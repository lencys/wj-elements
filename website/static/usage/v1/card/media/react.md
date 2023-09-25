```tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardSubtitle, CardTitle } from '@elements/react';

function Example() {
  return (
    <wj-card>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <wj-card-header>
        <wj-card-subtitle>Subtitle</wj-card-subtitle>
        <wj-card-title>Title</wj-card-title>
      </wj-card-header>
      <wj-card-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </wj-card-content>
    </wj-card>
  );
}
export default Example;
```
