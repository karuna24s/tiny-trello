import Component from '@ember/component';

export default Component.extend({
  actions: {
   createNewList() {
     this.get('onClick')();
   }
 }
});
