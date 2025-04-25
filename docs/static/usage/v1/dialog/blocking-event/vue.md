```html
<template>
  <div>
    <wje-button dialog="open-modal-blocking-event">Open</wje-button>
    <wje-dialog 
      ref="dialogRef" 
      trigger="open-modal-blocking-event" 
      headline="Title">
      <h4>Lorem ipsum dolor sit amet</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
      <div slot="footer">
        <wje-button class="close">Zatvoriť</wje-button>
        <wje-button ref="saveButtonRef" color="primary">Potvrdiť</wje-button>
      </div>
    </wje-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        id: 1,
        name: 'John Doe'
      }
    };
  },
  methods: {
    save(data) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('✅ Saved with data:', data);
          resolve(data);
        }, 1000);
      });
    }
  },
  mounted() {
    this.$refs.dialogRef.registerBlockingEvent(
      this.$refs.saveButtonRef,
      () => this.save(this.data)
    );
  }
}
</script>
```
