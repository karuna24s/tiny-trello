import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { id: 1,
        name: 'Default List',
        items: [
          { id: 1,
            title: 'Item Title 1',
            description: 'Hire Karuna'
          },
          { id: 2,
            title: 'Item Title 2',
            description: 'Description of second item here'
          },
        ]
      }
    ];
  }
});
