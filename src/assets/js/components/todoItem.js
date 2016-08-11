import React from 'react';
import ReactDom  from 'react-dom';
import { store } from '../stores/mainStore';
import {deleteTodo,completeTodo} from '../actions/todoAction'


export class TodoItem extends React.Component {
  onDeleteClick() {
    store.dispatch(deleteTodo(this.props.index));
  }
 
  onCompletedClick() {
    store.dispatch(completeTodo(this.props.index));
  }
 
  render() {
    return (
      <li>
        <a href="javascript:void(0)" onClick={this.onCompletedClick.bind(this)} style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.message.trim()}</a> 
        <a href="javascript:void(0)" onClick={this.onDeleteClick.bind(this)} ></a>
      </li>
    );
  }
}