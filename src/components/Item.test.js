import { render, screen, fireEvent } from '@testing-library/react';
import Item from './Item';

test('Проверка, что поле ввода имеет корректную информацию', () => {
  const id = 17;
  const title = 'What?';
  const deleteHandler = jest.fn();

  render(<Item id={id} title={title} deleteHandler={deleteHandler} />);
  expect(screen.getByText(title)).toBeInTheDocument();

  const button = screen.getByTestId('deleter-button');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(deleteHandler).toBeCalledWith(id);
});
