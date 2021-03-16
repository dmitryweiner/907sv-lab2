import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
const deleteHandler = jest.fn();
const list = [
  {
    id: 1,
    title: "I'm first"
  },
  {
    id: 2,
    title: "I'm second"
  }
];

describe(' Тесты List ', () => {
  test(' Отображение непустого списка ', () => {
    render(<List list={list} deleteHandler={deleteHandler} />);
    for (let item of list) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    }
  });
  test(' Вызов handleClick с id на кнопке у каждого элемента списка ', () => {
    render(<List list={list} deleteHandler={deleteHandler} />);
    const buttons = screen.getAllByTestId('delete-button');
    for (let button of buttons) {
      fireEvent.click(button);
    }
    expect(deleteHandler).toBeCalledTimes(list.length);
  });
  test(' Отображение пустого списка, вывод надписи ', () => {
    render(<List list={[]} delteHandler={deleteHandler} />);
    expect(screen.getByText('There are no elements yet (￣︿￣)')).toBeInTheDocument();
  });
});
