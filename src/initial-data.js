const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Buy bouquet'},
    'task-2': { id: 'task-2', content: 'Catch largemouth bass from 6am-7pm'},
    'task-3': { id: 'task-3', content: 'Give Wizard birthday present'},
    'task-4': { id: 'task-4', content: 'Buy hay'}
  },
  columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-2': {
        id: 'column-2',
        title: 'In progress',
        taskIds: [],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2'],
  };

  export default initialData;
