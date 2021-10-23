import React from "react";

const Button = (props) => {
  const primaryClass = props.primary ? 'primary' : '';
  return (
    <span
      className={`button ${primaryClass}`}
      // style={{
      //   padding: "2px 10px",
      //   color: "#eee",
      //   borderRadius: '10px',
      // }}
    >
      {props.children}
    </span>
  );
};

export default Button;
