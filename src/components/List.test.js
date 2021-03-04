import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';

const list = [
  {
    id: 1,
    title: 'Task1'
  },
  {
    id: 2,
    title: 'Task2'
  },
  {
    id: 3,
    title: 'Task3'
  }
];

test('Отображение непустого списка', () => {
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
