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
    <wj-infinite-scroll url="/api/users" placement="wj-list" size="20">
      <wj-list>
        <wj-item iterate>
          <wj-label>
            <h4>{{fullName}}</h4>
            <p>{{jobTitle}}</p>
          </wj-label>
        </wj-item>
      </wj-list>
    </wj-infinite-scroll>
  );
}
export default Example;
```
