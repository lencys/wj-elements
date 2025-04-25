```tsx
import { useEffect, useRef } from 'react';

function DialogWithBlockingEvent() {
  const dialogRef = useRef(null);
  const saveButtonRef = useRef(null);
  
  const data = {
    id: 1,
    name: 'John Doe'
  };
  
  function save(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('✅ Saved with data:', data);
        resolve(data);
      }, 1000);
    });
  }
  
  useEffect(() => {
    if (dialogRef.current && saveButtonRef.current) {
      dialogRef.current.registerBlockingEvent(
        saveButtonRef.current,
        () => save(data)
      );
    }
  }, []);
  
  return (
    <>
      <wje-button dialog="open-modal-blocking-event">Open</wje-button>
      <wje-dialog ref={dialogRef} trigger="open-modal-blocking-event" headline="Title">
        <h4>Lorem ipsum dolor sit amet</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
        <div slot="footer">
          <wje-button class="close">Zatvoriť</wje-button>
          <wje-button ref={saveButtonRef} color="primary">Potvrdiť</wje-button>
        </div>
      </wje-dialog>
    </>
  );
}

export default DialogWithBlockingEvent;
```
