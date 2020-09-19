import React from 'react';
import './App.css';
import AppTodoItems from './AppTodoItems';
import AppForm from './AppForm';
import AppFormClass from './AppFormClass';
import MemeGenerator from './AppMemeGenerator';
import AppIncDec from './AppIncDec';

function App() {
  return (
    <div>
      <AppIncDec/>
      <hr/>
      <MemeGenerator/>
      <hr/>
      <AppTodoItems/>
      <hr/>
      <AppForm/>
      <hr/>
      <AppFormClass />
      <hr/>
    </div>
  );
}

export default App;