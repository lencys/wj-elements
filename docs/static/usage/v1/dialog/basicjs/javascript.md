```html
    <wje-button id="example-js-open">JS Open</wje-button>
    <script>
      document.querySelector('#example-js-open').addEventListener('click', (e) => {
        let myDialog = document.createElement('wje-dialog');
        myDialog.setAttribute('headline', 'Title');
        myDialog.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.';

        document.body.appendChild(myDialog);

        myDialog.onOpen();
      });
    </script>
```
