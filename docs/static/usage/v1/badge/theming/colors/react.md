```tsx
import React from 'react';
import { Badge, Item, Label, List } from '@elements/react';
function Example() {
  return (
    <wje-list>
      <wje-item>
        <wje-label>Default</wje-label>
        <wje-badge>22k</wje-badge>
      </wje-item>
      <wje-item>
        <wje-label>Followers</wje-label>
        <wje-badge color="primary">22k</wje-badge>
      </wje-item>
      <wje-item>
        <wje-label>Likes</wje-label>
        <wje-badge color="complete">118k</wje-badge>
      </wje-item>
      <wje-item>
        <wje-label>Completed</wje-label>
        <wje-badge color="success">34k</wje-badge>
      </wje-item>
      <wje-item>
        <wje-label>Stars</wje-label>
        <wje-badge color="warning">80</wje-badge>
      </wje-item>
      <wje-item>
        <wje-label>Warnings</wje-label>
        <wje-badge color="danger">70</wje-badge>
      </wje-item>
      <wje-item>
        <wje-label>Notifications</wje-label>
        <wje-badge color="info">1000</wje-badge>
      </wje-item>
      <wje-item>
        <wje-label>Notifications</wje-label>
        <wje-badge color="menu">1000</wje-badge>
      </wje-item>
    </wje-list>
  );
}
export default Example;
```
