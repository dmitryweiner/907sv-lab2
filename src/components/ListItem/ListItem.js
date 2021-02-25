import React, { useState } from 'react';
import EditListItem from '../EditListItemForm/EditListItemForm';

export default function ListItem({ item, isFirst, isLast, dispatch }) {
  const isDone = { textDecoration: 'line-through' };
  const [isEdit, setIsEdit] = useState('');

  return (
    <>
      {!isEdit && (
        <li data-testid="list-item" style={item.isDone ? isDone : {}}>
          {item.name}
        </li>
      )}
      {isEdit && (
        <EditListItem item={item} dispatch={dispatch} closeItem={() => setIsEdit(false)} />
      )}
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() =>
          dispatch({ name: 'changeState', itemId: item.id, itemIsDone: !item.isDone })
        }
      />
      <button onClick={() => dispatch({ name: 'remove', itemId: item.id })}>Remove</button>
      <button onClick={() => setIsEdit(!isEdit)}>{!isEdit ? 'Edit' : 'Cancel'}</button>
      {!isFirst && (
        <button
          data-testid="up"
          onClick={() => dispatch({ name: 'changePosition', itemId: item.id, itemNumber: 1 })}
        >
          ↑
        </button>
      )}
      {!isLast && (
        <button
          data-testid="down"
          onClick={() => dispatch({ name: 'changePosition', itemId: item.id, itemNumber: -1 })}
        >
          ↓
        </button>
      )}
    </>
  );
}
