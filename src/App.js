import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    //useEffect(() => {});

    function addition(e) {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }
        setTasks([...tasks, text]);
        setText('');
    }

    return (
        <div>
            <div>
                <h1>Список дел</h1>
                <h2>Лабораторная №2. Добавляем элемент в список</h2>
            </div>
            <form onSubmit={e => addition(e)}>
                <label htmlFor="new-todo">Что нужно сделать?</label>
                <input
                    type="text"
                    id="new-todo"
                    onChange={e => setText(e.target.value)}
                    value={text}
                />
                <button type="submit" onClick={e => addition(e)}>
                    Добавить #{tasks.length + 1}
                </button>
            </form>
            <TodoList tasks={tasks} />
        </div>
    );
}

export default App;
