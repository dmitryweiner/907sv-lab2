import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [list, setList] = useState([]);

  function addendum(value) {
    const newElement = {
      id: Math.random().toString(36).substr(2),
      title: value
    };
    setList([...list, newElement]);
  }

  function clearTask(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <>
      <Form handleSubmit={addendum} />
      <List list={list} deleteHandler={clearTask} />
    </>
  );
}
export default App;
