```html
    <div id="open-modal-button" dialog="open-modal-div"><p>Open</p></div>
    <wje-dialog trigger="open-modal-div" headline="Title" async>
      <h4>Lorem ipsum dolor sit amet</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
      <div slot="footer">
        <wje-button class="close">Zatvoriť</wje-button>
        <wje-button id="save" color="primary">Potvrdiť</wje-button>
      </div>
    </wje-dialog>
    <script>
      let customButton = document.querySelector('#open-modal-button');

      customButton.addEventListener('click', function (e) {
        const customEvent = new CustomEvent(this.getAttribute('dialog'), {
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(customEvent);
      });

      document.querySelector('[trigger=open-modal-div]').beforeOpen = async (element) => {
        const date = new Date().toLocaleString();
        element.innerHTML = 'Changed content' + date;
      };
    </script>
```
