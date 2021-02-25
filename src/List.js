import React from 'react';
import ListItem from './ListItem';

export default function List({ list }) {
  function renderList() {
    if (!list.length) {
      return 'Список пуст';
    }
    return (
      <>
        {list.map((item, index) => (
          <ListItem title={item} key={index} />
        ))}
      </>
    );
  }
  return <ul data-testid="list">{renderList()}</ul>;
}
