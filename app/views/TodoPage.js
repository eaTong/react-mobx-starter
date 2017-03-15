/**
 * Created by eatong on 17-3-13.
 */
import React from 'react';
import {inject, observer} from 'mobx-react';

@inject('todo') @observer
class TodoPage extends React.Component {

  addTodo() {
    const todo = this.refs.todo.value;
    this.props.todo.addTodo(todo);
    this.refs.todo.value = '';
  }

  completeTodo(index) {
    this.props.todo.completeTodo(index);
  }

  render() {
    const {todo} = this.props;
    return (
      <div className="home-page">
        {todo.list.map((item, index) => (
          <p key={item.id} onClick={this.completeTodo.bind(this, index)}>
            {item.title}
            {item.complete ? '√' : '×'}
          </p>
        ))}
        <p className="add-todo">
          <input type="text" ref="todo"/>
          <button onClick={this.addTodo.bind(this)}>add</button>
        </p>
      </div>
    );
  }
}
export default TodoPage;
