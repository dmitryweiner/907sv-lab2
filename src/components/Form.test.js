import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('Проверка формы', () => {
  const text = '123';
  const handleSubmit = jest.fn();

  // eslint-disable-next-line react/react-in-jsx-scope
  render(<Form handleSubmit={handleSubmit} />);

  fireEvent.input(screen.getByTestId('input'), {
    target: {
      value: text
    }
  });

  expect(handleSubmit).not.toBeCalled();
  fireEvent.submit(screen.getByTestId('form'));
  expect(handleSubmit).toBeCalledWith(text);
  expect(screen.getByTestId('input')).toHaveValue('');
});
