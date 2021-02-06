import React from 'react';

export default function ListItem({ item, removeHandler }) {
  return (
    <>
      <li>{item.name}</li>
      <button onClick={() => removeHandler(item.id)}>Remove</button>
    </>
  );
}
