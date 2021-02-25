import React from 'react';
import { useState } from 'react';
import './App.css';
import List from '/List';

function App() {
  const [task, setTask] = useState('');
  const [arr, setArr] = useState([]);

  function addTask() {
    setArr([...arr, task]);
    setTask('');
  }

  //function removeTask(index) {arr.splice(index, 1);setArr([...arr]);}

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №2. Добавляем элемент в список</h2>
      </div>
      <div>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} />
        <button onClick={() => addTask()}>Добавить</button>
        <List list={arr} />
      </div>
    </div>
  );
}

export default App;
