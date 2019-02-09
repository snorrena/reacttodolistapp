import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';


import './App.css';

class App extends Component {

  // state ={
  //   todos: [
  //     {
  //       id: uuid.v4(),
  //       title: 'Take out the trash',
  //       completed: false
  //     },
  //     {
  //       id: uuid.v4(),
  //       title: 'Do the dishes',
  //       completed: true 
  //     },
  //     {
  //       id: uuid.v4(),
  //       title: 'Walk the dog',
  //       completed: false
  //     }
      
  //   ]
  // }

  state ={
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  //function iterates throught the todos and flips the state of th todo complete boolean matched to the id passed in through the
  //markcomplete method
  markComplete = (id) => {
    //function to loop through the todo list
    this.setState({ todos: this.state.todos.map(todo => {
          //check for id match
          if(todo.id === id){
            //flip the boolean of the match todo
            todo.completed = !todo.completed
          }
          return todo;
        })
    });
  }

  //Delete Todo
  delTodo = (id) => {
    // console.log(id)
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  //Add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   complete: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      complete: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data]}));
    
    
  }

  render() {
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header />

            <Route exact path='/' render={props =>(
              <React.Fragment>
                <AddTodo  addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo}/>
              </React.Fragment>
            )}/>

            <Route path="/about" component={About} />

          
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
