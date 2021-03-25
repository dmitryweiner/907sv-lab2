import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('Форма позволяет вводить и вызывает обработчик', () => {
  const text = '123';
  const handleSubmit = jest.fn();

  render(<Form handleSubmit={handleSubmit} />);
  fireEvent.input(screen.getByTestId('input'), {
    target: {
      value: text
    }
  });

  expect(handleSubmit).not.toBeCalled();
  fireEvent.click(screen.getByTestId('form'));
  expect(handleSubmit).not.toBeCalledWith(text);

  expect(screen.getByTestId('input')).toHaveValue(text);
});
