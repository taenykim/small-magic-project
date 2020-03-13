const initialState = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Captain America', src: 'captain.jpg' },
    'task-2': { id: 'task-2', content: 'IonMan', src: 'ironman.jpg' },
    'task-3': { id: 'task-3', content: 'Thor', src: 'thor.jpg' },
    'task-4': { id: 'task-4', content: 'Hulk', src: 'hulk.jpg' },
    'task-5': { id: 'task-5', content: 'Spiderman', src: 'spider.jpg' },
    'task-6': { id: 'task-6', content: 'Groot', src: 'groot.jpg' },
    'task-7': { id: 'task-7', content: 'Rocket', src: 'rocket.jpg' },
    'task-8': { id: 'task-8', content: 'Thanos', src: 'thanos.png' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Heros',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7']
    },
    'column-2': {
      id: 'column-2',
      title: 'villain',
      taskIds: ['task-8']
    }
  },
  columnOrder: ['column-1', 'column-2']
}

export const STORE_AVENGERS_DATA = 'STORE_AVENGERS_DATA'
export const STORE_RESET_AVENGERS = 'STORE_RESET_AVENGERS'

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_AVENGERS_DATA: {
      return {
        ...action.data
      }
    }
    case STORE_RESET_AVENGERS: {
      return {
        ...initialState
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}
