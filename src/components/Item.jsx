import React from 'react';

export default function Item({ id, title, deleteHandler }) {
  return (
    <li>
      {title}
      <button onClick={() => deleteHandler(id)} data-testid="deleter-button">
        Delete
      </button>
    </li>
  );
}
