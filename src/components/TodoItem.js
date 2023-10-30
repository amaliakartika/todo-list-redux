import React, { useRef, useState } from "react";


const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const [isChecked, setIsChecked] = useState(false);

  const inputRef = useRef(true);
  const checkboxRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const handleCheckboxChange = () => {
    setIsChecked(true);
    completeTodo(item.id)
  };

  const updateTask = (id, value, e) => {
    if (e.which === 13) {

      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  console.log(item);
  return (
    <li
      key={item.id}
      className="TodoCard"
    >
   
      <div 
        ref={checkboxRef}
        className="TodoChecked" 
        onClick={handleCheckboxChange}
      >
        {
          item.completed && (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#b8b8b8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="##b8b8b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          )
        }
      </div>

      <input
        type="text"
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => updateTask(item.id, inputRef.current.value, e)}
        className={`TodoName ${item.completed && 'CompletedTodo'}`}
      />
      <div className="ActionButtons">
        <button
          onClick={() => changeFocus()}
          className="EditButton"
        >
         edit
        </button>
        
        <button
          onClick={() => removeTodo(item.id)}
          className="DeleteButton"
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
