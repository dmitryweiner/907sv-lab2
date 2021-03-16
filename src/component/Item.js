import React from 'react';

export default function Item({ text, remove, index }) {
  return (
    <li>
      {' '}
      <span data-testid="component">{text}</span>{' '}
      <button data-testid="delete" onClick={() => remove(index)}>
        DELETE
      </button>
    </li>
  );
}
