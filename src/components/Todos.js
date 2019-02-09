import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {

  //state is in the app so the todo state change must be passed up to app
    // markComplete = () => {
    //   console.log('Hello from Todos')
    // }


  render() {
      //console.log(this.props.todos);
    return this.props.todos.map((todo) => (
        //<p>{todo.title}</p>
        //when looping through a map list each item should have a unique key value
      <Todoitem key={todo.id} todo={todo} markComplete = { this.props.markComplete }
      delTodo={this.props.delTodo} />
    ));
  }
}

Todos.propTypes= {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
