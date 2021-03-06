import Component from '@ember/component';

export default Component.extend({
  isEditingTitle: false,
  isAddingItem: false,

  actions: {
    addNewItem(text) {
      if (this.get('list.items').length < 1) {
        this.get('list.items').pushObject({id: 1, title: text, description: 'add description here'});
      } else {
        const itemId = this.get('list.items').get('lastObject').id + 1;
        this.get('list.items').pushObject({id: itemId, title: text, description: 'add description here'});
      }
      this.toggleProperty('isAddingItem');
      this.rerender();
    },
    deleteItem(id) {
      const itemIndex = this.get('list.items').findIndex(item => item.id === id);
      const item = this.get('list.items').objectAt(itemIndex);
      this.get('list.items').removeObject(item);
      this.rerender();
    },
    toggleEditingTitle() {
      this.toggleProperty('isEditingTitle');
      this.rerender();
    },
    toggleAddingItem() {
      this.toggleProperty('isAddingItem');
      this.rerender();
    }
  }
});
