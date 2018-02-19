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
    submitForm() {
      event.preventDefault();
      this.get('onSubmit')([this.get('title'), this.get('description')]);
      this.send('closeModal');
    }
  }
});
