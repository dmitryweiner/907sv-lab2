import React, { useState } from 'react';
import EditListItem from './EditListItemForm';

export default function ListItem({ item, removeHandler, changeState, editName }) {
  const isDone = { textDecoration: 'line-through' };
  const [isEdit, setIsEdit] = useState('');

  return (
    <>
      {!isEdit && <li style={item.isDone ? isDone : {}}>{item.name}</li>}
      {isEdit && (
        <EditListItem item={item} editName={editName} closeItem={() => setIsEdit(false)} />
      )}
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => changeState(item.id, !item.isDone)}
      />
      <button onClick={() => removeHandler(item.id)}>Remove</button>
      <button onClick={() => setIsEdit(!isEdit)}>{!isEdit ? 'Edit' : 'Cancel'}</button>
    </>
  );
}
