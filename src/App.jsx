import { useState } from 'react'
import AddForm from "./components/AddForm"
import EditForm from './components/EditForm'
import UserTable from "./components/UserTable"

function App() {
  const userData = [
    { id: 1, name: 'Ahmed', username: 'Hoopoe-Man' },
    { id: 2, name: 'Mohammed', username: 'Ready-Man' },
    { id: 3, name: 'Ramy', username: 'Ruff' },
  ]

  // Setting Inits
  const initFormState = { id: null, name: "", username: "" };
  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser] = useState(initFormState);
  const [editing, setEditing] = useState(false);

  // CRUD Operations Handlers
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (
    <>
      <h1 className="title">CRUD APP</h1>
      <div className="container">
        {editing ? (
          <>
            <EditForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </>
        ) : (
          <>
            <AddForm addUser={addUser} />
          </>
        )}
        <UserTable users={users} editRow={editRow} />
      </div>
    </>
  )
}

export default App
