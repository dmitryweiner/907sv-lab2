import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
const addHandler = jest.fn();

describe(' Тесты Form ', () => {
  test(' Отображение поля для ввода и кнопки для добавления ', () => {
    render(<Form />);
    const inputField = screen.getByPlaceholderText('Enter a deed');
    const addButton = screen.getByTestId("I'm addButton");
    expect(inputField).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
  test(' Вызов handleClick с value введенным в поле ввода ', () => {
    const inputValueText = 'Praise the Cat';
    render(<Form addHandler={addHandler} />);
    const inputField = screen.getByPlaceholderText('Enter a deed');
    const addButton = screen.getByTestId("I'm addButton");
    fireEvent.input(inputField, {
      target: { value: inputValueText }
    });
    fireEvent.click(addButton);
    expect(addHandler).toBeCalledWith(inputValueText);
  });
  test(' Проверка на пустоту ', () => {
    render(<Form addHandler={addHandler} />);
    const inputField = screen.getByPlaceholderText('Enter a deed');
    const addButton = screen.getByTestId("I'm addButton");
    fireEvent.input(inputField, {
      target: { value: '' }
    });
    fireEvent.click(addButton);
    expect(addHandler).not.toBeCalled();
  });
});
