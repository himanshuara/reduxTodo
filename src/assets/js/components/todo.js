import React  from 'react';
import ReactDOM  from 'react-dom';
import {AddTodoForm} from './todoForm';

ReactDOM.render(
  <div>
    <h1>Add Item</h1>
    <AddTodoForm />
    
  </div>,
  document.getElementById('container')
);