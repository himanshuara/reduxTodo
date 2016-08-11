import React from 'react';
import ReactDom  from 'react-dom';
import { store } from '../stores/mainStore';
import { completeTodo,addTodo,deleteTodo,clearTodo } from '../actions/todoAction';
import { TodoList } from './todoList';


export class AddTodoForm extends React.Component {
  
  constructor(props){
    super(props);
    
  }
  onFormSubmit(e) {
    var inp = (this.refs.todoInp),
    inpVal = inp.value.trim();
    e.preventDefault();
    store.dispatch(addTodo(inpVal));
    inp.value='';
  }  
 
  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type="text" placeholder="Enter Item.."   ref="todoInp" defaultValue=''  />
        <input type="submit" value="Add" />
        <div>
        <TodoList />
        </div>
      </form>
    );
  }
}
