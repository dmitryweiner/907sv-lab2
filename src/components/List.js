import React from 'react';
import Button from './Button';

export default function List({ list }) {
  function renderList() {
    if (!list || !list.length) {
      return 'Список пуст';
    }
    return list.map((item, index) => (
      <li key={index} data-testid="list-item">
        {item}
        <Button title={'[x]'}></Button>
      </li>
    ));
  }

  return <ul data-testid="list">{renderList()}</ul>;
}
