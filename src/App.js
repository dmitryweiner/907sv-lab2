import React from 'react';
import './App.css';
import Button from './components/Button';
import List from './components/List';
import Form from './components/Form';

function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Динамический список</h2>
      </div>
      <div>
        <Form></Form>
        <Button title={'Добавить'}></Button>
        <List />
      </div>
    </div>
  );
}

export default App;
