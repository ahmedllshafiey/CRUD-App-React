import { useState } from 'react'
import AddForm from "./components/AddForm"
import UserTable from "./components/UserTable"

function App() {
  const userData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const [users, setUsers] = useState(userData);

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  return (
    <>
      <h1 className="title">CRUD APP</h1>
      <div className="container">
        <AddForm addUser={addUser} />
        <UserTable users={users} />
      </div>
    </>
  )
}

export default App
