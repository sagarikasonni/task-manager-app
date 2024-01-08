import React, { useState } from "react";
import firebase from "../firebase";
// import firebase from "firebase/app";
import 'firebase/database'

const EditTask = ({ taskId, currentTitle, currentDescription }) => {
    const [title, setTitle] = useState(currentTitle)
    const [description, setDescription] = useState(currentDescription)
    const [editing, setEditing] = useState(false)

    const handleEditToggle = () => {
        setEditing(!editing)
    }

    const handleEditTask = (e) => {
        e.preventDefault()

        const updatedTask = {
            title, 
            description, 
        }

        const tasksRef = firebase.database().ref(`tasks/${taskId}`)
        tasksRef.update(updatedTask)

        setEditing(false)
    }

    return (
        <div>
          {editing ? (
            <form onSubmit={handleEditTask}>
              <label>Title:</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <label>Description:</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
              <button type="submit">Save Changes</button>
            </form>
          ) : (
            <div onDoubleClick={handleEditToggle}>
              <h3>{currentTitle}</h3>
              <p>{currentDescription}</p>
              {/* Add other task details as needed */}
            </div>
          )}
        </div>
    );
}

export default EditTask