export const FILTER_VALUES = ['All', 'Done', 'Not done'];
export type IFilterValues = typeof FILTER_VALUES;

export type Action =
  | ActionRemove
  | ActionChangePosition
  | ActionChangeState
  | ActionEdit
  | ActionCreate;

interface ActionRemove {
  type: 'remove';
  payload: {
    id: string;
  };
}

interface ActionChangePosition {
  type: 'changePosition';
  payload: {
    id: string;
    number: number;
  };
}

interface ActionChangeState {
  type: 'changeState';
  payload: {
    id: string;
    isDone: boolean;
  };
}

interface ActionEdit {
  type: 'edit';
  payload: {
    id: string;
    name: string;
  };
}

interface ActionCreate {
  type: 'create';
  payload: {
    item: Item;
  };
}

export interface Item {
  id: string;
  isDone: boolean;
  name: string;
  position: number;
}

const initialStore = {
  list: Array<Item>(),
  filterParams: {
    category: FILTER_VALUES[0],
    searchString: ''
  }
};

export function reducer(action: Action, previousState: typeof initialStore = initialStore) {
  switch (action.type) {
    case 'remove': {
      return {
        ...previousState,
        list: [...previousState.list.filter(el => el.id !== action.payload.id)]
      };
    }

    case 'changePosition': {
      return {
        ...previousState,
        list: changePosition(action.payload.id, action.payload.number, previousState.list)
      };
    }

    case 'changeState': {
      return {
        ...previousState,
        list: [
          ...previousState.list.map(item => {
            if (item.id === action.payload.id) {
              item.isDone = action.payload.isDone;
            }
            return item;
          })
        ]
      };
    }

    case 'edit': {
      return {
        ...previousState,
        list: [
          ...previousState.list.map(item => {
            if (item.id === action.payload.id) {
              item.name = action.payload.name;
            }
            return item;
          })
        ]
      };
    }

    case 'create': {
      return { ...previousState, list: [...previousState.list, action.payload.item] };
    }

    default:
      return { ...previousState };
  }
}

export function changePosition(id: string, number: number, itemsList: Item[]) {
  let previous;
  let current = 0;
  let temp;

  if (number > 0) {
    previous = 0;
  } else {
    previous = itemsList.length - 1;
  }

  let elms = itemsList.sort((el1, el2) => el1.position - el2.position);
  for (let i = 0; i < elms.length; i++) {
    if (elms[i].id === id) {
      if (number > 0) {
        if (i !== 0) {
          previous = i - 1;
        }
        current = i;
        break;
      } else {
        if (i !== itemsList.length - 1) {
          previous = i + 1;
        }
        current = i;
        break;
      }
    }
  }

  temp = elms[previous].position;
  elms[previous].position = elms[current].position;
  elms[current].position = temp;

  return [...elms];
}

export function selectListByFilter(state: typeof initialStore) {
  state.list = state.list.sort((el1, el2) => el1.position - el2.position);
  switch (state.filterParams.category) {
    case FILTER_VALUES[1]:
      return state.list.filter(
        el => el.isDone && el.name.includes(state.filterParams.searchString)
      );
    case FILTER_VALUES[2]:
      return state.list.filter(
        el => !el.isDone && el.name.includes(state.filterParams.searchString)
      );
    default:
      return state.list.filter(el => el.name.includes(state.filterParams.searchString));
  }
}
