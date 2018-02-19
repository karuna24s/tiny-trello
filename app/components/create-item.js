import Component from '@ember/component';

export default Component.extend({
  actions: {
    createNewItem() {
      this.get('onClick')();
    }
  }
});
