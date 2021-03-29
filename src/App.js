import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [list, setList] = useState([]);

  function add(value) {
    const newEl = {
      id: Math.random().toString(),
      text: value
    };
    setList([...list, newEl]);
  }

  function del(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <>
      <h3>Список делов</h3>
      <Form handleSubmit={value => add(value)} />
      <List list={list} deleteHandler={index => del(index)} />
    </>
  );
}

export default App;
