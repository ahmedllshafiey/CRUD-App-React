import React, { useState, useEffect } from 'react'

const EditForm = props => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <div className="form-area">
            <form
                className="form-input"
                onSubmit={event => {
                    event.preventDefault()

                    props.updateUser(user.id, user)
                }}
            >
                <label className="label">Name</label>
                <input
                    className="input-text"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
                <label className="label">Username</label>
                <input
                    className="input-text"
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                />
                <button className="btn-add" >Update user</button>
                <button 
                    onClick={() => props.setEditing(false)} 
                    className="btn-add"
                >
                    Cancel
                </button>
            </form>
        </div>
    )
}

export default EditForm