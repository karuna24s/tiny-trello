import Component from '@ember/component';

export default Component.extend({
  isEditingTitle: false,
  modalOpen: false,
  // classNameBindings: ['modalOpen',false],

  actions: {
    toggleEditingTitle() {
      this.toggleProperty('isEditingTitle');
      this.rerender();
    },

    openModal() {
      this.set('modalOpen', true);
    }
  }

});
