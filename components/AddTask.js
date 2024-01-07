import React, { useState } from "react";
import firebase from "../src/firebase";
import 'firebase/database'

const AddTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleAddTask = (e) => {
        e.preventDefault()

        const newTask = {
            title, 
            description,
        }

        const tasksRef = firebase.database().ref('tasks')
        tasksRef.push(newTask)

        setTitle('')
        setDescription('')
    }

    return (
        <div>
          <h2>Add Task</h2>
          <form onSubmit={handleAddTask}>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">Add Task</button>
          </form>
        </div>
    );
}

export default AddTask