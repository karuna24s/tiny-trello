import Component from '@ember/component';

export default Component.extend({
  isAddingItem: false,

  actions: {
    createItem() {
      const title = this.get('text');
      this.get('onAdd')(title);
    },

    toggleAddingItem() {
      this.toggleProperty('isAddingItem');
      this.rerender();
    }

  }
});
