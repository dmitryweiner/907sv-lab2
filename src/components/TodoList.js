import React from 'react';
import ItemTodoList from './TodoItem';

export default function TodoList({ tasks, remove }) {
    function renderTodoList() {
        if (!tasks.length) {
            return 'Tasks list is empty!';
        }
        return (
            <ul>
                {tasks.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <ItemTodoList item={item} index={index} remove={remove} />
                ))}
            </ul>
        );
    }

    return <>{renderTodoList()}</>;
}
