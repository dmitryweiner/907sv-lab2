import React, { useState } from 'react';

export default function ListItem({ item, removeHandler, changeState }) {
  const [isDone, setIsDone] = useState(item.isDone);
  function doneStyles() {
    return item.isDone ? { textDecoration: 'line-through' } : {};
  }
  return (
    <>
      <li style={doneStyles()}>{item.name}</li>
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => {
          changeState(item.id, !isDone);
          setIsDone(isDone => !isDone);
        }}
      />
      <button onClick={() => removeHandler(item.id)}>Remove</button>
    </>
  );
}
