import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ListItem from './ListItem';

test('content viewing test', () => {
  const title = 'Item';
  const id = '1619';
  const deleteHandler = jest.fn();
  render(<ListItem title={title} id={id} deleteHandler={deleteHandler} />);
  expect(screen.getByText(title)).toBeInTheDocument();

  const button = screen.getByTestId('delete_button');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(deleteHandler).lastCalledWith(id);
});
