import { changePosition, reducer, FILTER_VALUES } from './store';

describe('changePosition tests', () => {
  let items = null;
  beforeEach(() => {
    items = [
      { id: '0', name: 'first', isDone: false, position: 0 },
      { id: '1', name: 'second', isDone: false, position: 1 },
      { id: '2', name: 'last', isDone: false, position: 2 }
    ];
  });

  test('move up second element to one position', () => {
    const updatedList = changePosition('1', 1, items);
    const second = updatedList.find(el => el.id === '1');
    const first = updatedList.find(el => el.id === '0');
    expect(first.position).toBe(1);
    expect(second.position).toBe(0);
  });

  test('move down second element to one position', () => {
    const updatedList = changePosition('1', -1, items);
    const second = updatedList.find(el => el.id === '1');
    const last = updatedList.find(el => el.id === '2');
    expect(second.position).toBe(2);
    expect(last.position).toBe(1);
  });

  test('move up first element to one position', () => {
    const updatedList = changePosition('0', 1, items);
    const second = updatedList.find(el => el.id === '0');
    expect(second.position).toBe(0);
  });

  test('move down last element to one position', () => {
    const updatedList = changePosition('2', -1, items);
    const second = updatedList.find(el => el.id === '2');
    expect(second.position).toBe(2);
  });
});

describe('reducer test', () => {
  let items = null;
  beforeEach(() => {
    items = [
      { id: '0', name: 'first', isDone: false, position: 0 },
      { id: '1', name: 'second', isDone: false, position: 1 },
      { id: '2', name: 'last', isDone: false, position: 2 }
    ];
  });

  test('remove existing item from list', () => {
    const removeItem = items[0];
    const action = { name: 'remove', itemId: removeItem.id };
    const state = { filter: FILTER_VALUES[0], search: '', list: items };
    const newItems = reducer(action, state);
    expect(newItems).not.toEqual(items);
    expect(newItems).not.toContain(removeItem);
  });

  test('remove not existing item from list', () => {
    const action = { name: 'remove', itemId: '1000' };
    const state = { filter: FILTER_VALUES[0], search: '', list: items };
    const newItems = reducer(action, state);
    expect(newItems).toEqual(items);
  });

  test('change position of second item', () => {
    const changePositionItem = items[1];
    expect(changePositionItem.position).toBe(1);
    const action = { name: 'changePosition', itemId: changePositionItem.id, itemNumber: 1 };
    const state = { filter: FILTER_VALUES[0], search: '', list: items };
    reducer(action, state);
    expect(changePositionItem.position).toBe(0);
  });

  test('change state of item', () => {
    const changeStateItem = items[1];
    expect(changeStateItem.isDone).toBe(false);
    const action = { name: 'changeState', itemId: changeStateItem.id, itemIsDone: true };
    const state = { filter: FILTER_VALUES[0], search: '', list: items };
    reducer(action, state);
    expect(changeStateItem.isDone).not.toBe(false);
  });

  test('edit item', () => {
    const editItem = items[1];
    expect(editItem.name).toBe('second');
    const action = { name: 'edit', itemId: editItem.id, itemName: 'first' };
    const state = { filter: FILTER_VALUES[0], search: '', list: items };
    reducer(action, state);
    expect(editItem.name).toBe('first');
  });

  test('create new item', () => {
    const newItem = { id: '3', name: 'lastLast', isDone: false, position: 3 };
    const action = { name: 'create', item: newItem };
    const state = { filter: FILTER_VALUES[0], search: '', list: items };
    const newItems = reducer(action, state);
    expect(newItems).toContain(newItem);
  });

  test('pass wrong action name', () => {
    const action = { name: 'credcdcdcdate' };
    const state = { filter: FILTER_VALUES[0], search: '', list: items };
    const newItems = reducer(action, state);
    expect(newItems).toEqual(items);
  });
});
