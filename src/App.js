import React from 'react';
import { useState } from 'react';
import './App.css';
import List from './List';
import Form from './Form';

function App() {
  const [list, setList] = useState([]);

  function add(value) {
    const newElement = {
      title: value
    };
    setList([...list, newElement]);
  }

  function remove(id) {
    setList([...list.filter(item => item.id !== id)]);
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Добавляем элемент в список</h2>
      </div>
      <div>
        <Form handleSubmit={add()} />
        <List list={list} handleClick={remove()} />
      </div>
    </div>
  );
}

export default App;
