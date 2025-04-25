```tsx
import React, { useRef } from 'react';
import { Button } from '@elements/react';

function Example() {
  const containerRef = useRef(null);
  
  const handleOpenDialog = () => {
    const myDialog = document.createElement('wje-dialog');
    myDialog.setAttribute('headline', 'Title');
    myDialog.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.';
    
    document.body.appendChild(myDialog);
    
    myDialog.onOpen();
  };

  return (
    <div ref={containerRef}>
      <wje-button onClick={handleOpenDialog}>JS Open</wje-button>
    </div>
  );
}

export default Example;
```
