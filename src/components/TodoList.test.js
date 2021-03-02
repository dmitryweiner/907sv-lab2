import React from 'react';
import {render, screen} from "@testing-library/react";
import TodoList from "./TodoList";

test( 'TodoList Solo Test', () => {
    const tasks = ['Example Text 1'];
    render ( <TodoList tasks={tasks}/> );
    const elements = screen.getAllByTestId('item-list');
    expect(elements).toHaveLength(tasks.length);
    expect(elements[0]).toHaveTextContent(tasks[0]);
})

test( 'TodoList Full Test', () => {
    const tasks = ['Example Text 1', 'Example Text 2', 'Example Text 3'];
    render ( <TodoList tasks={tasks}/> );
    const elements = screen.getAllByTestId('item-list');
    expect(elements).toHaveLength(tasks.length);
    expect(elements[1]).toHaveTextContent(tasks[1]);
})

test('TodoList Empty Test', () => {
    const tasks = [];
    render ( <TodoList tasks={tasks}/> );
    expect(screen.getByText('Tasks list is empty!')).toBeInTheDocument();
})

