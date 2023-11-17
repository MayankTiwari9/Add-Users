import React from "react";
import "./Invalid.css";

const Invalid = (props) => {
  return (
    <div>
      <div className="backdrop"/>
        <div className="modal">
          <div className="header">
            <h2 className="title">Invalid Input</h2>
          </div>
          <div className="content">
            <p className="message">
              {props.message}
            </p>
          </div>
          <div className="actions">
            <button onClick={props.onOkButtonHandler}>Okay</button>
          </div>
        </div>
    </div>
  );
};

export default Invalid;
