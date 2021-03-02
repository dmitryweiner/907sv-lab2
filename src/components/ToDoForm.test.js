import React from 'react'
import ToDoForm from "./ToDoForm";
import {fireEvent, render, screen} from "@testing-library/react";

test('ToDoForm display empty list', () => {
    const text = 'Сделать дз по матеше';
    const handleClick = jest.fn();
    render(<ToDoForm handleClick={handleClick}/>);
    fireEvent.input(screen.getByTestId('input-field'), {
        target: {
            value: text
        }
    });
    expect(handleClick).not.toBeCalled();
    fireEvent.click(screen.getByTestId('form'));
    expect(handleClick).not.toBeCalledWith(text);
})

