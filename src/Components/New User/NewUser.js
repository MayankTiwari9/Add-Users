import React from 'react'
import UserForm from './UserForm';

const NewUser = (props) => {

    const saveUserDataHandler = (enteredUserData) => {
        const userdata = {
            ...enteredUserData,
            id: Math.random().toString(),
        }
        props.onAddUser(userdata);
    }

  return (
    <div>
      <UserForm onSaveUserData={saveUserDataHandler}/>
    </div>
  )
}

export default NewUser
