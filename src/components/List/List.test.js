import List from './List';
import React from 'react';
import { render, screen } from '@testing-library/react';

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
    const list = [];
    const filterItem = () => true;
    render(<List filterItem={filterItem} list={list} />);
    const elements = screen.queryAllByTestId('list-item');
    expect(elements).toHaveLength(list.length);
  });
});
