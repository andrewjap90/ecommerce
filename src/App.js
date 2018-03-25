import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      todos: [],
      task: '',
    }
  }

  addTodo() {
    let todo = this.state.todos;
    todo.push(this.state.task);
    this.setState({
      todos:todo
    })
  }

  deleteTodo(i) {
    let todo = this.state.todos;
    todo.splice(i,1);
    this.setState({
      todos:todo
    })

  }
  render() {
    return (
      <div className="App">
        <h1> To do tes </h1>
        <input onChange={(e)=> this.setState({task:e.target.value})} type="text" />
        {this.state.todos.map((todo,i)=>
        <div key={i}>
          <p>{todo} <button onClick={()=>this.deleteTodo(i)}>X</button></p>
          
        </div>
        )}
        
        <button onClick={()=> this.addTodo()}>Add to do</button>
      </div>
    );
  }
}

export default App;
