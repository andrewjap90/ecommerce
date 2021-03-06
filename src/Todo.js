import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state= {
      todos: [],
      task: '',
      edit: '',
    }
  }

  addTodo(e) {
    if (e === 'Enter'){
      let todo = this.state.todos;
      todo.push(this.state.task);
      this.setState({
        todos:todo
      })
      this.refs.task.value ='';
    }

  }

  deleteTodo(i) {
    let todo = this.state.todos;
    todo.splice(i,1);
    this.setState({
      todos:todo
    })

  }

  editTodo(value,i) {
    let todo = this.state.todos
    todo[i]= value
    this.setState({
     todos:todo
   })
  }

  render() {
    return (
      <div className="App">
        <h1> To do tes </h1>
        <input onChange={(e)=> this.setState({task:e.target.value})}
        type="text" onKeyPress={(e)=> this.addTodo(e.key)} ref="task"/>
        {this.state.todos.map((todo,i)=>
        <div key={i}>
          <p onClick={()=> this.setState({edit:i})}>{todo}
          <button onClick={()=>this.deleteTodo(i)}>X</button></p>
          {(this.state.edit === i)
          ? <input onChange={(e)=> this.editTodo(e.target.value,i)} type="text" />
          : null
          }
        </div>
        )}


      </div>
    );
  }
}

export default Todo;
