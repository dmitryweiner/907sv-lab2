import React from 'react';

export default function TodoList({ tasks }) {
    return (
        <ul>
            {tasks.map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <OutputTodoList item={item} index={index} />
            ))}
        </ul>
    );
}

function OutputTodoList({ item, index }) {
    return (
        <li>
            {index} {item}
        </li>
    );
}
