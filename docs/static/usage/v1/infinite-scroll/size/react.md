```tsx
import React, { useState, useEffect } from 'react';
import {
  InfiniteScroll,
  InfiniteScrollContent,
  List,
  Item,
  Avatar,
  Label,
} from '@elements/react';

function Example() {
  return (
    <wje-infinite-scroll url="/api/users" placement="wje-list" size="20">
      <wje-list>
        <wje-item iterate>
          <wje-label>
            <h4>{{fullName}}</h4>
            <p>{{jobTitle}}</p>
          </wje-label>
        </wje-item>
      </wje-list>
    </wje-infinite-scroll>
  );
}
export default Example;
```
