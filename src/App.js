//import components
import React,{ useState } from "react";
import { UserTable } from "./components/UserTable/UserTable"
import { AddUserForm } from "./components/AddUserForm/AddUserForm";
import { v4 as uuidv4 } from 'uuid';



const App = () => {

  const usersData = [
    { 
      id: uuidv4(), name: 'Lina', username: 'floppydiskette' 
    },

    { 
      id: uuidv4(), name: 'Juan Pablo', username: 'siliconeidolon' 
    },
    { 
      id: uuidv4(), name: 'Mateo', username: 'benisphere' 
    },
  ]

  // state
  const [users, setUsers] = useState(usersData);

  // agregar Usuario
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([
      ...users,
      user
    ]);
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  )
}

export {App}