import React from 'react';

function ListItem({ title, id, deleteHandler }) {
  return (
    <div className="ListItem">
      {title}
      <button data-testid={id} onClick={() => deleteHandler(id)}>
        x
      </button>
    </div>
  );
}
export default ListItem;
