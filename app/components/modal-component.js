import Component from '@ember/component';

export default Component.extend({
  modalOpen: false,

  actions: {
    closeModal() {
      this.set('modalOpen', false);
    },
    openModal() {
      this.set('modalOpen', true);
    },
    deleteConfirm() {
      const confirmed = confirm('Are you sure you want to delete this item?');
      if (confirmed) {
        this.get('onConfirm')();
        this.send('closeModal');
      }
    }
  }
});
