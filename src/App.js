import TodoForm from "./components/TodoForm";
import ListTodos from "./components/TodosList";

import "./App.css";

function App() {

  return (
    <div className="App">
      <h1 className="Heading">
        What's the plan for today?
      </h1>
      <div className="TodoWrapper">
        <TodoForm />
        <ListTodos/>
      </div>
    </div>
  );
}

export default App;
