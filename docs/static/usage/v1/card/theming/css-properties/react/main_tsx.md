```tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardSubtitle, CardTitle } from '@elements/react';

import './main.css';

function Example() {
  return (
    <wje-card id="custom">
      <wje-card-header>
        <wje-card-subtitle>Subtitle</wje-card-subtitle>
        <wje-card-title>Title</wje-card-title>
      </wje-card-header>
      <wje-card-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </wje-card-content>
    </wje-card>
  );
}
export default Example;
```
