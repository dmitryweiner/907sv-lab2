import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';

const list = [
  {
    id: 3,
    title: 'Frau'
  },
  {
    id: 4,
    title: 'Makkie'
  }
];
test('Список корректно отображает пустой массив элементов', () => {
  const list = [];
  const deleteHandler = jest.fn();
  render(<List list={list} deleteHandler={deleteHandler} />);

  expect(screen.getByText('Пока нет элементов')).toBeInTheDocument();
});

test('Список корректно отображает массив элементов', () => {
  const deleteHandler = jest.fn();
  render(<List list={list} deleteHandler={deleteHandler} />);

  for (let item of list) {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  }

  for (let button of screen.getAllByTestId('deleter-button')) {
    fireEvent.click(button);
  }
  expect(deleteHandler).toBeCalledTimes(list.length);
});
