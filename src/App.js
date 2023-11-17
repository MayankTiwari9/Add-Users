import { useState } from "react";
import "./App.css";
import NewUser from "./Components/New User/NewUser";
import Users from "./Components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return <div className="App">
    <NewUser onAddUser={addUserHandler}/>
    <Users items={users}/>
  </div>;
}

export default App;
