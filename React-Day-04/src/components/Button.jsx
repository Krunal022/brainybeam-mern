import React from "react";

const Button = (props) => {
  return (
    <div className="btn-div">
      <button style={{ backgroundColor: props.color }}>{props.name} 🐦‍🔥</button>
    </div>
  );
};

export default Button;
