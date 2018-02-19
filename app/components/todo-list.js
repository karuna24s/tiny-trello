import Component from '@ember/component';

export default Component.extend({
  isEditingTitle: false,
  addingItem: false,

  actions: {

    addNewItem() {
      this.get("list.items").push({ list_id: this.get('list').id, title: "New Item", description: "Item's Description" });
      this.rerender();
    },

    toggleEditingTitle() {
      this.toggleProperty('isEditingTitle');
      this.rerender();
    },

    toggleAddingItem() {
      this.toggleProperty('addingItem');
      this.rerender();
    }
  }
});
