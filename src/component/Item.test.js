import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Item from './Item';

// const Test = ({ text }) => {
//   return <span>{text}</span>;
// };
//
// test('render learn react link', () => {
//   const value = 'learn react';
//   render(<Test text={value} />);
//   const linkElement = screen.getByText(/leatn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders full list', () => {
//   const list = ['one', 'two', 'three'];
//   render(<List list={list} />);
//   const elements = screen.getAllByTestId('list-item');
//   expect(elements).toHaveLength(list.length);
//   expect(elements[0]).toHaveTextContent(list[0]);
// });
//
// test('renders empty list', () => {
//   const list = [];
//   render(<List list={list} />);
//   const element = screen.getByTestId('list');
//   expect(element).toHaveTextContent('Список пуст');
// });
test('renders what it got', () => {
  const text = 'Test text';
  render(<Item text={text} />);
  const element = screen.getByTestId('component');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(text);
});
test('тест кнопки на удаление', () => {
  const index = 'title';
  const remove = jest.fn();
  render(<Item index={index} remove={remove} />);
  const element = screen.getByTestId('delete');
  expect(element).toBeInTheDocument();
  expect(remove).not.toBeCalled();
  fireEvent.click(element);
  expect(remove).toBeCalledWith(index);
});
