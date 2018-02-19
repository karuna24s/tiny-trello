import Component from '@ember/component';

export default Component.extend({
  isEditingTitle: false,
  modalOpen: false,

  actions: {
    toggleEditingTitle() {
      this.toggleProperty('isEditingTitle');
      this.rerender();
    },
    openModal() {
      this.set('modalOpen', true);
    },
    deleteItem() {
      const id = this.get('item.id');
      this.get('onDelete')(id);
    },
    itemSubmit() {
      this.get();
    },
  }
});
