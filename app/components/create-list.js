import Component from '@ember/component';

export default Component.extend({
  actions: {
    createList() {
      this.get('onAdd')();
    }
  }
});
