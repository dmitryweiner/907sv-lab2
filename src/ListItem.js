import React from 'react';

export default function ListItem({ title, id, handleClick }) {
  return (
    <>
      <li data-testid="task">{title}</li>
      <button data-testid="test-button" onClick={() => handleClick(id)}>
        X
      </button>
    </>
  );
}
