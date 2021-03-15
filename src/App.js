import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [list, setList] = useState([]);

  function addedNum(value) {
    const newElement = {
      id: Math.random(),
      title: value
    };
    setList([...list, newElement]);
  }

  function clearTask(id) {
    setList([...list.filter(element => element.id !== id)]);
  }

  return (
    <>
      <Form handleSubmit={addedNum} />
      <List list={list} deleteHandler={clearTask} />
    </>
  );
}
export default App;
