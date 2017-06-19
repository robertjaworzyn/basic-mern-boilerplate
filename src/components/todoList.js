import React from 'react';
import {Link} from 'react-router';

import About from "./about";
import TodoItem from "./todoItem";
import AddItem from "./addItem";
import * as api from '../api'


require("./css/todoList.css");

class TodoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //todos: ["buttheads!", "buttheads?!?!","bushwicks","sartorial"],
            todos: [],
            age: "AMKSLAS"
        }

    }

    componentDidMount = () => {
      this.fetchTodos();
    }

    //ajax call to fetch all todo items from mongo
    fetchTodos = () => {
      api.fetchTodos().then(newTodos => {
        this.setState({
          todos: newTodos
        })
      })
    }

    //ajax call to post to database
    addTodo = (newItem) => {
      api.addTodo(newItem).then(resp => {
        var newTodos = this.state.todos;
        newTodos.push(resp.newItem)
        this.setState({
          todos: newTodos
        })
      })
    }


    render() {

        var todos = this.state.todos;
        if (todos) {
          todos = todos.map((item, index) => {
              return (
                  <TodoItem item = {item} key = {index} onDelete = {this.onDelete}/>
              );
          });
        }
        return(
            <div id = "todo-list">
                <ul>
                    {todos}
                </ul>
                <AddItem onAdd = {this.addTodo}/>
                <br /><br />
                <Link to = {'/about'}>ABOUT</Link>
            </div>
        );

    }

    onDelete = (item) => {
        api.deleteItem(item).then(resp => {
          this.fetchTodos();
        })

    }



}

export default TodoComponent;
