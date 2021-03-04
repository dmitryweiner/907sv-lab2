import React from 'react';

export default function ListItem({ title, id, handleRemove }) {
  return (
    <>
      <li data-testid="task">{title}</li>
      <button data-testid="test-button" onClick={() => handleRemove(id)}>
        X
      </button>
    </>
  );
}
