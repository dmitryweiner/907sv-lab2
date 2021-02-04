import React from 'react';
import ListItem from './ListItem';

export default function List(props) {
  return (
    <ul>
      {props.list.map((item, i) => (
        <ListItem key={i} name={item} />
      ))}
    </ul>
  );
}
