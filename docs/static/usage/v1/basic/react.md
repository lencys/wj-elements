```tsx
import React from 'react';
import RelativeTime from '@elements/react';

function Example() {
  return (
    <>
      <b>No date</b>
      <wje-relative-time></wje-relative-time><br/>
      
      <b>Timestamp</b>
      <wje-relative-time date="1704067200"></wje-relative-time><br/>
      
      <b>ISO Date</b>
      <wje-relative-time date="2024-01-01T00:00:00+00:00"></wje-relative-time><br/>
    </>
  );
}
export default Example;
```
