import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { id: 1,
        name: 'Default List',
        items: [
          { id: 1,
            title: 'Important Task',
            description: 'Hire Karuna.'
          },
          { id: 2,
            title: 'Another Important Task',
            description: 'Description of that task can updated here.'
          },
        ]
      }
    ];
  }
});
