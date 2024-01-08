import React from "react";
import firebase from "../firebase";
// import firebase from "firebase/app";
import 'firebase/database'

const DeleteTask = ({taskId}) => {
    const handleDelTask = () => {
        const tasksRef = firebase.database().ref(`tasks/${taskId}`)
        tasksRef.remove()
    }

    return (
        <div>
          <button onClick={handleDelTask}>Delete Task</button>
        </div>
    );
}

export default DeleteTask