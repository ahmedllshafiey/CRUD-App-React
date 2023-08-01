import { useState } from 'react'

const AddForm = (props) => {
    const initFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initFormState)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    return (
        <>
            <div className="form-area">
                <form
                    className="form-input"
                    onSubmit={(event) => {
                        event.preventDefault()
                        if (!user.name || !user.username) return

                        props.addUser(user)
                        setUser(initialFormState)
                    }}
                >
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                    />
                    <button className="btn-add">Add</button>
                </form>
            </div>
        </>
    )
}

export default AddForm