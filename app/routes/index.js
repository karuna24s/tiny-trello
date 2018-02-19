import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { name: 'Default List',
        items: [{
          title: 'Item Title 1',
          description: 'Hire Karuna'
        }]
      }
    ];
  }
});
