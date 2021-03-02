import React, { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import TodoList from './components/TodoList';

export default function App() {
    const [tasks, setTasks] = useState([]);

    function addition(text) {
        if (text.length === 0) {
            return;
        }
        setTasks([...tasks, text]);
    }

    function handleDelete(index) {
        tasks.splice(index, 1);
        setTasks([...tasks]);
    }

    return (
        <div>
            <div>
                <h1>Список дел</h1>
                <h2>Лабораторная №2. Добавляем элемент в список</h2>
            </div>
            <ToDoForm addition={addition} />
            <TodoList tasks={tasks} remove={handleDelete} data-testid="RemoveButton" />
        </div>
    );
}
