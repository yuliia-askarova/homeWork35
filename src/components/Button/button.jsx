import React from "react";

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.color 
  };

  return <button onClick={props.onClick} className="btn" style={buttonStyle}>{props.text}</button>;
};

export default Button;
