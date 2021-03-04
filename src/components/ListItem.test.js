import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ListItem from './ListItem';

test('Проверка на отражение содержимого', () => {
  const title = 'task';
  const id = '123';
  const deleteHandler = jest.fn();
  render(<ListItem title={title} id={id} deleteHandler={deleteHandler} />);
  expect(screen.getByText(title)).toBeInTheDocument();

  const button = screen.getByTestId('delete_button');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(deleteHandler).lastCalledWith(id);
});
