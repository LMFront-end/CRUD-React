//import components
import React,{ useState } from "react";
import { UserTable } from "./components/UserTable/UserTable"
import { AddUserForm } from "./components/AddUserForm/AddUserForm";

import { v4 as uuidv4 } from 'uuid';
import { EditUserForm } from "./components/EditUserForm/EditUserForm";



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

  // eliminar usuarios

const deleteUser = (id) => {

  //console.log(id);

  const arrayFiltrado = users.filter(user => user.id !== id);

  setUsers(arrayFiltrado);
}

// editar usuarios
const [edditing, setEdditing] = useState(false);


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            edditing ? (

              <div>
                <h2>Edit user</h2>
                  <EditUserForm />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                  <AddUserForm addUser={addUser}/>
              </div>
            )

          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser} setEdditing={setEdditing}/>
        </div>
      </div>
    </div>
  )
}

export {App}