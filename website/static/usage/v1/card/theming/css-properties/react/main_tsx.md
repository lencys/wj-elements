```tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardSubtitle, CardTitle } from '@elements/react';

import './main.css';

function Example() {
  return (
    <wj-card id="custom">
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
