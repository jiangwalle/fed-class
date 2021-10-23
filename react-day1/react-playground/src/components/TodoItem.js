import React from "react";
import Button from "./Button";

function TodoItem(props) {
  return (
    <li>
      <span style={{ lineHeight: "2rem", paddingRight: "20px" }}>
        {props.text}
      </span>
      <Button primary={true}>Complete</Button>
      <Button>Delete</Button>
    </li>
  );
}

export default TodoItem;
