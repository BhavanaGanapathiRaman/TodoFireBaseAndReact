import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data().todo));
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  console.log("input:" + input);
  const addTodo = (event) => {
    event.preventDefault();
    //fire off when we click the button
    db.collection('todos').add({todo:input,timestamp:firebase.firestore.FieldValue.serverTimestamp()});
   
    
    setInput("");
  };
  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input"> Enter a todo </InputLabel>
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
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
