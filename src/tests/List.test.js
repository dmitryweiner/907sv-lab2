import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import List from './List';

const list = [
  { id: 1, title: 'Item1' },
  { id: 2, title: 'Test' },
  { id: 3, title: 'TestItem3' }
];
test('showing non-empty list', () => {
  const deleteHandler = jest.fn();
  render(<List list={list} deleteHandler={deleteHandler} />);
  for (let item of list) {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  }
  for (let button of screen.getAllByTestId('delete_button')) {
    fireEvent.click(button);
  }
  expect(deleteHandler).toBeCalledTimes(list.length);
});
