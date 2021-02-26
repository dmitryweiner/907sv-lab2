export default function reducer(action, previousList = []) {
  switch (action.name) {
    case 'remove': {
      return [...previousList.filter(el => el.id !== action.itemId)];
    }

    case 'changePosition': {
      return changePosition(action.itemId, action.itemNumber, previousList);
    }

    case 'changeState': {
      return [
        ...previousList.map(item => {
          if (item.id === action.itemId) {
            item.isDone = action.itemIsDone;
          }
          return item;
        })
      ];
    }

    case 'edit': {
      return [
        ...previousList.map(item => {
          if (item.id === action.itemId) {
            item.name = action.itemName;
          }
          return item;
        })
      ];
    }

    case 'create': {
      return [...previousList, action.item];
    }

    default:
      return [...previousList];
  }
}

export function changePosition(id, number, itemsList) {
  let previous;
  let current;
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
