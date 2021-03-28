import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

test('ListItem displays content and reacts to the button', () => {
  const id = 123;
  const text = 'random text';
  const deleteHandler = jest.fn();

  render(<ListItem text={text} id={id} deleteHandler={deleteHandler} />);
  expect(screen.getByText(text)).toBeInTheDocument();

  const button = screen.getByTestId('delete_button');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(deleteHandler).lastCalledWith(id);
});
