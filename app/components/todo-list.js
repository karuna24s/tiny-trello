import Component from '@ember/component';

export default Component.extend({
  actions: {
    addNewItem() {
      this.get("list.items").push({ title: "New Item", description: "Item's Description" });
    }
  }
});
