import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [filter, setFilter] = useState("active");

  return (
    <>
       <div className="FilterWrapper">
        <button
          className= {`FilterButton ${filter === "all" && 'ActiveFillterButton'}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`FilterButton ${filter === "active" && 'ActiveFillterButton'}`}
        >
          Active
        </button>
        <button
          className={`FilterButton ${filter === "completed" && 'ActiveFillterButton'}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        
      </div>
      <ul className="TodosCardWrapper">
          {props.todos.length > 0 && filter === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}

          {props.todos.length > 0 && filter === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}

          {props.todos.length > 0 && filter === "all"
            ? props.todos.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
