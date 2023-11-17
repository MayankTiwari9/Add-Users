import React, { useEffect, useState } from "react";
import Invalid from "../Invalid/Invalid";
import "./UserForm.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();


    if(age < 0){
      setIsAgeValid(false);
      setErrorMessage("Please enter a valid age (> 0).");
      return;
    }

    if (name === "" || age === "") {
      setIsValid(false);
      setErrorMessage("Please enter a valid name and age (non-empty values).");
      return;
    }

    const userData = {
      name: name,
      age: age,
    };
    
    
    setName('');
    setAge('');

    props.onSaveUserData(userData);

  };

  const onOkButtonHandler = () => {
    setIsValid(true);
    setIsAgeValid(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest("#invalidMessage") === null) {
        setIsValid(true);
        setIsAgeValid(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div>
        <form className="user-form" onSubmit={onSubmitHandler}>
          <div className="user-form-div">
            <label>Username</label>
            <input
              type="text"
              name="user"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="user-form-div">
            <label>Age (Years) </label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="user-form-div">
            <button>Add User</button>
          </div>
        </form>
      </div>
      {!isValid && <Invalid message={errorMessage} onOkButtonHandler={onOkButtonHandler} />}
      {!isAgeValid && <Invalid message={errorMessage} onOkButtonHandler={onOkButtonHandler} />}
    </div>
  );
};

export default UserForm;
