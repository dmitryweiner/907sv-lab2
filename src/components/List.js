import React from 'react';
import ListItem from './ListItem';

export default function List({ list, handleRemove }) {
  function renderList() {
    if (!list.length) {
      return 'Нет дел в списке';
    }
    return (
      <>
        {list.map(item => (
          <ListItem title={item.title} key={item.id} handleRemove={handleRemove} id={item.id} />
        ))}
      </>
    );
  }
  return <ul data-testid="list">{renderList()}</ul>;
}
