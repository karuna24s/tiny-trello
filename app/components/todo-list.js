import Component from '@ember/component';

export default Component.extend({
  isEditingTitle: false,

  actions: {

    addNewItem() {
      this.get("items").push({ title: "New Item", description: "Item's Description" });
      this.rerender();
    },

    toggleEditingTitle() {
      this.toggleProperty('isEditingTitle');
      this.rerender();
    }
  }
});
