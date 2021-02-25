import React from 'react';
import { render, screen } from '@testing-library/react';
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
