import React, { Component } from 'react';
import { connect } from 'react-redux';
import {TodoView} from './';
import { addTodo, removeTodo } from '../store/utilities/todolist';
// Smart container;
class TodoContainer extends Component {
  constructor() {
    super();
    this.state = {
      text : " check me ",
      completed: false,
  
    }
    this.blankState = this.state;
  }


  handleChange = (event) => {
    // const posts= this.state.posts
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
  }

  handleComplete = (event) =>{
    const completed = this.state.post.completed;
    event.preventDefault();
    (completed)?this.setState(completed=false):this.setState(completed=false);
  }

  handleReset = (event) => {
    event.preventDefault();
    this.props.removeTodo();
    this.setState(this.blankState);
  }

  render() {
    return (
      <>
      <TodoView
        allTodos={this.props.todolist}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleReset={this.handleReset}
      />
      </>
    );
  }
}

function mapState(state) {
  return {
    todolist: state.todolist
  }
}

function mapDispatch(dispatch) {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    removeTodo: () => dispatch(removeTodo())
  }
}

export default connect(mapState, mapDispatch)(TodoContainer);