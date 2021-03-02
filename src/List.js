import React from 'react';
import ListItem from './ListItem';

export default function List({ list, handleClick }) {
  function renderList() {
    if (!list.length) {
      return 'Нет дел в списке';
    }
    return (
      <>
        {list.map((item, index) => (
          <ListItem title={item} key={index} handleClick={handleClick} id={index} />
        ))}
      </>
    );
  }
  return <ul data-testid="list">{renderList()}</ul>;
}
