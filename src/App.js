import React from 'react';
import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';

function App() {
  const [list, setList] = useState([]);

  function add({ field }) {
    const newTask = {
      id: Math.random().toString(36).substr(2),
      title: field
    };
    setList([...list, newTask]);
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
        <Form handleSubmit={add} />
        <List list={list} handleRemove={remove} />
      </div>
    </div>
  );
}

export default App;
