import React from 'react';

export default function ListItem({ title, id, deleteHandler }) {
  return (
    <li>
      {title}
      <button onClick={() => deleteHandler(id)} data-testid="delete_button">
        [x]
      </button>
    </li>
  );
}
