import List from './List';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

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
      expect(dispatchHandler).toBeCalledWith({ name: 'remove', itemId: list[index].id });
    });
  });
});
