import React from 'react';

export default function ListItem({ text, id, deleteHandler }) {
  return (
    <li>
      {text}
      <button onClick={() => deleteHandler(id)} data-testid="delete_button">
        [X]
      </button>
    </li>
  );
}
