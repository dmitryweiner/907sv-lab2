import React from 'react';

export default function Item({ id, title, deleteHandler, isChecked }) {
  return (
    <li>
      <input checked={isChecked} data-testid="checkbox" type="checkbox" />
      {title}
      <button onClick={() => deleteHandler(id)} data-testid="deleter-button">
        Delete
      </button>
    </li>
  );
}
