import React from "react";
import "./Users.css";

const Users = (props) => {
  return (
    <div className="user-list">
      {props.items &&
        props.items.map((item) => {
          return (
            <ul key={item.id}>
              <li className="user-list-item">{`${item.name} (${item.age} years old)`}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default Users;
