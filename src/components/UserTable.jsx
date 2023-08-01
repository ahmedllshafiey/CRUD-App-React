const UserTable = ({ users }) => {

    users.map((user) => {
        console.log(user.name)
    })
    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}

export default UserTable