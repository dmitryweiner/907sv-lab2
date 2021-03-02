import React from 'react';

export default function ItemTodoList({ item, index, remove }) {
    return (
        <li data-testid="item-list">
            {index}
            {' ) '}
            {item}
            <button data-testid="item-delete" onClick={() => remove(index)}>
                x
            </button>
        </li>
    );
}
