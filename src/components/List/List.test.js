import { List } from './List';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ACTION_TYPES } from '../../store';

describe('List tests', () => {
  test('pass two items', () => {
    const list = [
      { id: 0, name: 'hello', isDone: false, position: 10 },
      { id: 1, name: 'hello', isDone: false, position: 11 }
    ];
    const filterItem = () => true;
    render(<List filterItem={filterItem} list={list} />);
    const elements = screen.getAllByTestId('list-item');
    expect(elements).toHaveLength(list.length);
  });

  test('pass empty list', () => {
    const filterItem = () => true;
    render(<List filterItem={filterItem} list={[]} />);
    const elements = screen.queryAllByTestId('list-item');
    expect(elements).toHaveLength([].length);
  });

  test('remove all items', () => {
    const dispatchHandler = jest.fn();
    const list = [
      { id: 0, name: 'hello', isDone: false, position: 10 },
      { id: 1, name: 'hello', isDone: false, position: 11 }
    ];
    render(<List dispatch={dispatchHandler} list={list} />);
    const elements = screen.getAllByTestId('remove-button');
    elements.forEach((el, index) => {
      fireEvent.click(el);
      expect(dispatchHandler).toBeCalledWith({
        type: ACTION_TYPES.REMOVE,
        payload: { id: list[index].id }
      });
    });
  });

  test('click on checkbox of every item', () => {
    const dispatchHandler = jest.fn();
    const list = [
      { id: 0, name: 'hello', isDone: false, position: 10 },
      { id: 1, name: 'hello', isDone: true, position: 11 }
    ];
    render(<List dispatch={dispatchHandler} list={list} />);
    const elements = screen.getAllByTestId('item-checkbox');
    elements.forEach((el, index) => {
      //item show correct state of checkbox
      expect(el.getAttribute('checked')).toEqual(list[index].isDone ? '' : null);
      //click on checkbox
      fireEvent.click(el);
      expect(dispatchHandler).toBeCalledWith({
        type: ACTION_TYPES.CHANGE_STATE,
        payload: {
          id: list[index].id,
          isDone: !list[index].isDone
        }
      });
    });
  });
});
