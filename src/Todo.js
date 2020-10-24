import React from "react";
import {List,ListItem,ListItemText} from "@material-ui/core";
import './Todo.css'

function Todo(props) {
  return (
      <List className="todo_list">
      <ListItem>
      <ListItemText primary='todo' secondary={props.text}/>
      </ListItem>

      </List>
    // <div>
    //   <li>{props.text}</li>
      
    // </div>
  );
}

export default Todo;
