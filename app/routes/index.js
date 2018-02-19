import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { id: 1,
        title: 'Default List',
        items: [
          { id: 1,
            title: 'Item Title 1',
            description: 'Description of first item here'
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
