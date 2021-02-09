import React from 'react';

export default function ListItem({ item, removeHandler, changeState }) {
  const isDone = { textDecoration: 'line-through' };
  return (
    <>
      <li style={item.isDone ? isDone : {}}>{item.name}</li>
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => changeState(item.id, !item.isDone)}
      />
      <button onClick={() => removeHandler(item.id)}>Remove</button>
    </>
  );
}
