const UserTable = (props) => {

    props.users.map((user) => {
        console.log(user.name)
    })
    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(user)
                                }}
                                className="btn"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => props.deleteUser(user.id)}
                                className="btn"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}

export default UserTable