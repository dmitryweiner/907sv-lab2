import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import List from './List';

test('Renders list', () => {
  const list = ['Помыть посуду', 'Полить цветы', 'Сходить в магазин', 'Помыть полы'];
  render(<List list={list} />);
  const elements = screen.getAllByTestId('task');
  expect(elements).toHaveLength(list.length);
  for (let i = 0; i < list.length; i++) {
    expect(elements[i]).toHaveTextContent(list[i]);
  }
});

test('ClickHandler of ListItem to be called with id', () => {
  const list = ['Помыть посуду', 'Полить цветы', 'Сходить в магазин', 'Помыть полы'];
  const handleClick = jest.fn();
  render(<List list={list} handleClick={handleClick} />);
  const buttons = screen.getAllByTestId('test-button');
  for (let i = 0; i < list.length; i++) {
    expect(buttons[i]).toBeInTheDocument();
    expect(handleClick).not.toBeCalledWith(i);
    fireEvent.click(buttons[i]);
    expect(handleClick).toBeCalledWith(i);
  }
});

test('Renders empty list', () => {
  const list = [];
  render(<List list={list} />);
  const element = screen.getByTestId('list');
  expect(element).toHaveTextContent('Нет дел в списке');
});
