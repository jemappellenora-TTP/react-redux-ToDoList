import React from 'react';

const TodoView = (props) => {
  const { allTodos, handleChange, handleSubmit, handleReset } = props;
  return (
    <div className="todolist">
        <h1>Lica's Todo List</h1>
        <form>
          <label>Add Todo:</label>
            <input type="text" name="text" onChange={handleChange}/>
          <br></br>
          <p className="allTodos"></p>
          <button onClick={handleSubmit}>Add Todo</button>
        </form>
        <button onClick={handleReset}>Reset</button>
        {allTodos.map((todo,index) =>
          <div> 
            <label key={index} >{todo.text}</label>
            <input type="checkbox"/>
          </div>)}
    </div>
  );
};

export default TodoView;