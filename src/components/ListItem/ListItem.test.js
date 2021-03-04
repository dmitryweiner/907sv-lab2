import ListItem from 'ListItem.js';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
const clickHandler = jest.fn();

describe(' Тесты ListItem ', () => {
  test(' Отображение title ', () => {
    render(<ListItem title="I'm title" />);
    const expectedTitle = screen.getByText("I'm title");
    expect(expectedTitle).toBeInTheDocument();
  });
  test(' Отображение кнопки, вызов handleClick с id ', () => {
    render(<ListItem id="I'm id" clickHandler={clickHandler} />);
    const button = screen.getByTestId("I'm id");
    expect(button).toBeInTheDocument();
    expect(clickHandler).not.toBeCalled();
    fireEvent.click(button);
    expect(clickHandler).toBeCalledWith("I'm id");
  });
});
