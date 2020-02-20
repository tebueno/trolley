import React from 'react';
import './App.css';
import List from './components/List';

function App(props) {
  
  let listMap = props.store.lists.map(list => {
    return <List key={list.id} title={list.header} ></List>
  });

  return (
  <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div class="App-list">
    <div className="App-list">
      {listMap}
    </div>
    </div>
  </main>

  );
}

export default App;
