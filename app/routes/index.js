import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { title: 'Default List',
        items: [{
          title: 'Item Title 1',
          description: 'Hire Karuna'
        }]
      }
    ];
  }
});
