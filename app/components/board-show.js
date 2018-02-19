import Component from '@ember/component';

export default Component.extend({
  actions: {
    addNewList() {
      this.get('lists').push({ title: "New List" });
      this.rerender();
    }
  }
});
