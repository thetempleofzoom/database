import React, { Component } from 'react';
import './aboutcomponent.css';
import TDinput from './tdinputs';
import TodoItem from './todoItems';

export class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // {id: 0, text: "Fix to-do List"},
        // {id: 1, text: "Pay bills"},
        // {id: 2, text: "open bank account"}
      ],
      nextId: 0
    };

    this.addTodo = this.addTodo.bind(this);
       this.removeTodo = this.removeTodo.bind(this);
     }

     addTodo(todoText) {
       let todos = this.state.todos.slice();
       todos.push({id: this.state.nextId, text: todoText});
       this.setState({
         todos: todos,
         nextId: ++this.state.nextId
       });
     }

     removeTodo(id) {
       this.setState({
           todos: this.state.todos.filter((todo, index) => todo.id !== id)
         });
     }

  render() {
    return (
    <div>
      <header classname="App-header">My To-Do List
      </header>
      <TDinput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
      </div>
    );
  }
}
