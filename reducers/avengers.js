const initialState = {
  items: {
    'item-1': { id: 'item-1', content: 'Captain America', src: 'captain.jpg' },
    'item-2': { id: 'item-2', content: 'IonMan', src: 'ironman.jpg' },
    'item-3': { id: 'item-3', content: 'Thor', src: 'thor.jpg' },
    'item-4': { id: 'item-4', content: 'Hulk', src: 'hulk.jpg' },
    'item-5': { id: 'item-5', content: 'Spiderman', src: 'spider.jpg' },
    'item-6': { id: 'item-6', content: 'Groot', src: 'groot.jpg' },
    'item-7': { id: 'item-7', content: 'Rocket', src: 'rocket.jpg' },
    'item-8': { id: 'item-8', content: 'Thanos', src: 'thanos.png' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Heros',
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7']
    },
    'column-2': {
      id: 'column-2',
      title: 'villain',
      itemIds: ['item-8']
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
