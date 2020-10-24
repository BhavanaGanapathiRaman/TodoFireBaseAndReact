import "./App.css";
import React, { useState } from "react";
import { Button,FormControl,Input,InputLabel } from "@material-ui/core";


function App() {
  const [todos, setTodos] = useState(["DO THIS REACT APP", "DO DISHES"]);
  const [input, setInput] = useState("");
  console.log("input:" + input);
  const addTodo = (event) => {
    //fire off when we click the button

    setTodos([...todos, input]);
    event.preventDefault();
    setInput("");
  };
  return (
    <div className="App">
     
      <form>
        {/* <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /> */}
        <FormControl>
          <InputLabel htmlFor="my-input">Enter a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add TODO item
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
