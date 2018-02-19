import Component from '@ember/component';

export default Component.extend({
  actions: {
    addNewList() {
      this.get('lists').pushObject({ name: "New List", items: [] });
      this.rerender();
    }
  }
});
