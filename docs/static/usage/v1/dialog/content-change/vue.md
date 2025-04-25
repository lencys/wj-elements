```html
<template>
  <div>
    <div id="open-modal-button" dialog="open-modal-div" ref="buttonRef">
      <p>Open</p>
    </div>
    <wje-dialog trigger="open-modal-div" headline="Title" async ref="dialogRef">
      <h4>Lorem ipsum dolor sit amet</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
      <div slot="footer">
        <wje-button class="close">Zatvoriť</wje-button>
        <wje-button id="save" color="primary">Potvrdiť</wje-button>
      </div>
    </wje-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    const buttonEl = this.$refs.buttonRef as HTMLElement;
    const dialogEl = this.$refs.dialogRef as HTMLElement;
    
    if (buttonEl && dialogEl) {
      // Add click event to button
      buttonEl.addEventListener('click', function(e) {
        const customEvent = new CustomEvent(this.getAttribute('dialog'), {
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(customEvent);
      });
      
      // Set beforeOpen handler on dialog
      dialogEl.beforeOpen = async (element: HTMLElement) => {
        const date = new Date().toLocaleString();
        element.innerHTML = `Changed content ${date}`;
      };
    }
  }
});
</script>
```
