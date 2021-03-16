import { render, screen } from '@testing-library/react';
import React from 'react';
import List from './List';

test('render learn react link', () => {
  const list = ['list1', 'list2', 'list3'];
  render(<List list={list} />);
  const elements = screen.getAllByTestId('component');
  expect(elements).toHaveLength(list.length);
  for (let i = 0; i < list.length; i++) {
    expect(elements[i]).toHaveTextContent(list[i]);
  }
});
