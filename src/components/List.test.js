import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import React from 'react';

const list = [
  {
    id: 1,
    text: '123'
  },
  {
    id: 2,
    text: '1234'
  },
  {
    id: 3,
    text: '12d3'
  }
];

test('correctly displays an empty array', () => {
  const list = [];
  const deleteHandler = jest.fn();
  render(<List list={list} deleteHandler={deleteHandler} />);

  expect(screen.getByText('not elements')).toBeInTheDocument();
});

test('correctly displays array', () => {
  const deleteHandler = jest.fn();
  render(<List list={list} deleteHandler={deleteHandler} />);
  for (let item of list) {
    expect(screen.getByText(item.text)).toBeInTheDocument();
  }

  for (let button of screen.getAllByTestId('delete_button')) {
    fireEvent.click(button);
  }
  expect(deleteHandler).toBeCalledTimes(list.length);
});
