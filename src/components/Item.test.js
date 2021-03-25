import { render, screen, fireEvent } from '@testing-library/react';
import Item from './Item';
const id = 17;
const title = 'What?';
const deleteHandler = jest.fn();
test('Проверка, что поле ввода имеет корректную информацию', () => {
  render(<Item id={id} title={title} deleteHandler={deleteHandler} />);
  expect(screen.getByText(title)).toBeInTheDocument();

  const button = screen.getByTestId('deleter-button');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(deleteHandler).toBeCalledWith(id);
});

test('Элемент списка отображает выбранный чекбокс ', () => {
  // const checkedHandler = jest.fn();

  render(<Item id={id} title={title} isChecked={true} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toHaveAttribute('checked');
});

test('Элемент списка отображает пустой чекбокс ', () => {
  const checkedHandler = jest.fn();

  render(<Item id={id} title={title} checkedHandler={checkedHandler} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toHaveAttribute('checked');
});
