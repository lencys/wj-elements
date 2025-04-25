```html
    <wje-button dialog="open-modal-blocking-event">Open</wje-button>
    <wje-dialog trigger="open-modal-blocking-event" headline="Title">
      <h4>Lorem ipsum dolor sit amet</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
      <div slot="footer">
        <wje-button class="close">Zatvoriť</wje-button>
        <wje-button id="save-blocking-event" color="primary">Potvrdiť</wje-button>
      </div>
    </wje-dialog>
    <script>
      const data = {
        id: 1,
        name: 'John Doe'
      };
    
      function save(data) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(data);
          }, 1000);
        });
      }
    
      document.querySelector('[trigger="open-modal-blocking-event"]').registerBlockingEvent(
          document.querySelector("#save-blocking-event"),
          () => save(data)
      );
    </script>
```
