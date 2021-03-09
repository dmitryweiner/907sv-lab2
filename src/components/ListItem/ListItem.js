import React from 'react';

function ListItem({ title, id, deleteHandler }) {
  return (
    <div className="ListItem">
      {title}
      <button data-testid="delete-button" onClick={() => deleteHandler(id)}>
        x
      </button>
    </div>
  );
}
export default ListItem;
