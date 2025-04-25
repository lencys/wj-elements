```tsx
import { useEffect, useRef } from 'react';

function DialogExample() {
  const dialogRef = useRef(null);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    if (buttonRef.current && dialogRef.current) {
      // Add click event to button
      buttonRef.current.addEventListener('click', function(e) {
        const customEvent = new CustomEvent(this.getAttribute('dialog'), {
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(customEvent);
      });
      
      // Set beforeOpen handler on dialog
      dialogRef.current.beforeOpen = async (element) => {
        const date = new Date().toLocaleString();
        element.innerHTML = `Changed content ${date}`;
      };
    }
  }, []);
  
  return (
    <>
      <div id="open-modal-button" dialog="open-modal-div" ref={buttonRef}>
        <p>Open</p>
      </div>
      <wje-dialog trigger="open-modal-div" headline="Title" async ref={dialogRef}>
        <h4>Lorem ipsum dolor sit amet</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
        <div slot="footer">
          <wje-button class="close">Zatvoriť</wje-button>
          <wje-button id="save" color="primary">Potvrdiť</wje-button>
        </div>
      </wje-dialog>
    </>
  );
}

export default DialogExample;
```
