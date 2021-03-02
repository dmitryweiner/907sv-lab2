import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import ItemTodoList from "./TodoItem";

test('List Item display content',() => {
    const index = '1';
    const item = 'Забыть спросить хохла';
    const removeHandle = jest.fn();

    render (<ItemTodoList item={item} index={index} remove={removeHandle}/>);
    expect(screen.getByText(item, {exact:false})).toBeInTheDocument();

    const removeButton = screen.getByTestId('item-delete');
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);

    expect(removeHandle).lastCalledWith(index);
})