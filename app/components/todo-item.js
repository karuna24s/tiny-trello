import Component from '@ember/component';

export default Component.extend({
  isEditingTitle: false,

  actions: {
    toggleEditingTitle() {
      this.toggleProperty('isEditingTitle');
      this.rerender();
    }
  }
});
