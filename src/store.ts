export enum IFilterValues {
  ALL,
  DONE,
  NOT_DONE
}

export const ACTION_TYPES = {
  CREATE: 'create',
  REMOVE: 'remove',
  CHANGE_POSITION: 'changePosition',
  CHANGE_STATE: 'changeState',
  EDIT: 'edit'
};

export type Action =
  | ActionRemove
  | ActionChangePosition
  | ActionChangeState
  | ActionEdit
  | ActionCreate;

interface ActionRemove {
  name: 'remove';
  itemId: string;
}

interface ActionChangePosition {
  name: 'changePosition';
  itemId: string;
  itemNumber: number;
}

interface ActionChangeState {
  name: 'changeState';
  itemId: string;
  itemIsDone: boolean;
}

interface ActionEdit {
  name: 'edit';
  itemId: string;
  itemName: string;
}

interface ActionCreate {
  name: 'create';
  item: Item;
}

export interface Item {
  id: string;
  isDone: boolean;
  name: string;
  position: number;
}

const initialStore = {
  list: Array<Item>(),
  filter: IFilterValues[IFilterValues.ALL],
  search: ''
};

export function reducer(action: Action, previousState: typeof initialStore = initialStore) {
  switch (action.name) {
    case 'remove': {
      return [...previousState.list.filter(el => el.id !== action.itemId)];
    }

    case 'changePosition': {
      return changePosition(action.itemId, action.itemNumber, previousState.list);
    }

    case 'changeState': {
      return [
        ...previousState.list.map(item => {
          if (item.id === action.itemId) {
            item.isDone = action.itemIsDone;
          }
          return item;
        })
      ];
    }

    case 'edit': {
      return [
        ...previousState.list.map(item => {
          if (item.id === action.itemId) {
            item.name = action.itemName;
          }
          return item;
        })
      ];
    }

    case 'create': {
      return [...previousState.list, action.item];
    }

    default:
      return [...previousState.list];
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
  switch (state.filter) {
    case IFilterValues[IFilterValues.DONE]:
      return state.list.filter(el => el.isDone && el.name.includes(state.search));
    case IFilterValues[IFilterValues.NOT_DONE]:
      return state.list.filter(el => !el.isDone && el.name.includes(state.search));
    default:
      return state.list.filter(el => el.name.includes(state.search));
  }
}
