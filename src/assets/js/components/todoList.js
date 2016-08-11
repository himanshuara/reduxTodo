import React from 'react';
import ReactDom  from '../vendor/react-dom';
import { store } from '../stores/mainStore';
import { TodoItem } from './todoItem';


export class TodoList extends React.Component {
  
  constructor(props){
    super();
    this.state = {
    items: []
  };
  }
  componentWillMount() {
    store.subscribe(() => {
      var state = store.getState();
      this.setState({
        items: state.todo.items
      });
    });
  }
 
  render() {
    var items = [];
 
    this.state.items.forEach((item, index) => {
      items.push(<TodoItem
        key={index}
        index={index}
        message={item.message}
        completed={item.completed}
      />);
    });
 
    if (!items.length) {
      return (
        <p>
          <i>Please add something to do.</i>
        </p>
      );
    }
 
    return (
      <ul className={"listItem"}>{ items }</ul>
    );
  }
}