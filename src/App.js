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
    if (value.length === 0) {
      alert('Пусто ');
    } else {
      setList([...list, newElement]);
    }
  }

  function clearTask(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <>
      <Form handleSubmit={addedNum} />
      <List list={list} deleteHandler={clearTask} />
    </>
  );
}
export default App;
