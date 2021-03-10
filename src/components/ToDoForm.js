import React, { useState } from 'react';

export default function ToDoForm({ addition }) {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (text.length === 0) {
            alert('Enter test');
            return;
        }
        addition(text);
        setText('');
    }

    return (
        <div>
            <form data-testid="form" onSubmit={handleSubmit}>
                <label htmlFor="new-todo">Что нужно сделать?</label>
                <input
                    data-testid="input-field"
                    type="text"
                    id="new-todo"
                    onChange={e => setText(e.target.value)}
                    value={text}
                />
                <button type="submit" data-testid="AddButton">
                    Добавить
                </button>
            </form>
        </div>
    );
}
