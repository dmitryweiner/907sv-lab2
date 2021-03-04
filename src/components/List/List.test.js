import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import List from './List';

const list = [
  {
    id: 0,
    title: 'Помыть посуду'
  },
  {
    id: 1,
    title: 'Полить цветы'
  },
  {
    id: 2,
    title: 'Сходить в магазин'
  },
  {
    id: 3,
    title: 'Помыть полы'
  }
];

test('Renders list', () => {
  render(<List list={list} />);
  const elements = screen.getAllByTestId('task');
  expect(elements).toHaveLength(list.length);
  for (let i = 0; i < list.length; i++) {
    expect(elements[i]).toHaveTextContent(list[i].title);
  }
});

test('RemoveHandler of ListItem to be called with id', () => {
  const handleRemove = jest.fn();
  render(<List list={list} handleRemove={handleRemove} />);
  const buttons = screen.getAllByTestId('test-button');
  for (let i = 0; i < list.length; i++) {
    expect(buttons[i]).toBeInTheDocument();
    expect(handleRemove).not.toBeCalledWith(list[i].id);
    fireEvent.click(buttons[i]);
    expect(handleRemove).toBeCalledWith(list[i].id);
  }
});

test('Renders empty list', () => {
  const list = [];
  render(<List list={list} />);
  const element = screen.getByTestId('list');
  expect(element).toHaveTextContent('Нет дел в списке');
});
