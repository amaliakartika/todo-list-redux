import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  
  return (
    <div className="TodoFormWrapper">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="TodoName"
        value={todo}
        placeholder="What to do"
      />

      <button
        onClick={() => add()}
      >
         Add
      </button>
      <br />
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Todos);
